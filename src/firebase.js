import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDAx5XK3yw7jxnzFnD0Ye6Rb2cvwzH1Xi4",
    authDomain: "ashfimzk-5ede8.firebaseapp.com",
    projectId: "ashfimzk-5ede8",
    storageBucket: "ashfimzk-5ede8.appspot.com",
    messagingSenderId: "69516867298",
    appId: "1:69516867298:web:d8ed861a8df36ae26b90bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
