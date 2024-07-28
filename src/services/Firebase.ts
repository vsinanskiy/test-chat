import {initializeApp} from 'firebase/app';
import {FirebaseApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDOHoo3QKzEnVSBxBQLg9pFOujxy_2jF60",
    authDomain: "chat-d0f1a.firebaseapp.com",
    projectId: "chat-d0f1a",
    storageBucket: "chat-d0f1a.appspot.com",
    messagingSenderId: "346682463235",
    appId: "1:346682463235:web:eeedcef57ad17df0aaea36"
};

export class Firebase {
    static instance: Firebase;
    static app: FirebaseApp;

    constructor() {
        if (Firebase.instance) {
            return Firebase.instance;
        }
        Firebase.app = initializeApp(firebaseConfig);

        Firebase.instance = this;
    }
}
