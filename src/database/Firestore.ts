import {getFirestore} from "firebase/firestore";
import {Firebase} from "../services/Firebase";
import {initializeApp} from "firebase/app";

export class Firestore {
    static instance: Firestore;
    static db: Firestore;

    constructor() {
        if (Firestore.instance) {
            return Firestore.instance;
        }
        Firestore.db = getFirestore(Firebase.app);

        Firestore.instance = this;
    }
}
