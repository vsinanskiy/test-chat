import {Request, response, Response} from "express";
import {Routes} from "./Routes";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {body, param, query, validationResult} from 'express-validator';

export class AuthRoutes {
    index(request: Request, response: Response) {
        let result;
        switch (request.path) {
            case '/auth/login':
                return AuthRoutes.login(request, response);
            default:
                return Routes.notFound(request, response);
        }
    }

    public static async login(request: Request, response: Response) {
        await query('email').notEmpty().run(request);
        await query('password').notEmpty().run(request);

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({errors: errors.array()});
        }

        const email = request.query['email']!.toString();
        const password = request.query['password']!.toString();

        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                return response.status(500).send({'error': error.message});
            });

        return response.send(userCredential);
    }
}