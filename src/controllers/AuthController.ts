import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export class AuthController {
    static async login(email: string, password: string) {
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                throw new Error(error.message);
            });
    }
}
