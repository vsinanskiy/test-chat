import express, {Express, Request, Response} from "express";
import {AuthRoutes} from "./routes/AuthRoutes";
import {Routes} from "./routes/Routes";
import dotenv from "dotenv";
import {Firebase} from "./services/Firebase";
import {Firestore} from "./database/Firestore";

const port = process.env.PORT || 3000;

dotenv.config();

/**
 * Services
 */
const firebase = new Firebase();
const firestore = new Firestore();


const app: Express = express();
const routes: Routes = new Routes();
const auth: AuthRoutes = new AuthRoutes();

app.get("/status", (request: Request, response: Response) => {
    const status = {
        "status": "OK"
    };

    response.send(status);
});

app.get('/auth/*', auth.index)
app.get('/*', routes.index)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})