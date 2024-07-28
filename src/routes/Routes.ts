import {Request, Response} from "express";

export class Routes {
    index(request: Request, response: Response) {
        return Routes.notFound(request, response)
    }

    public static notFound(request: Request, response: Response) {
        return response.status(404).send({'error': 'Not Found'});
    }
}
