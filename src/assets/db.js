import {initializeApp} from 'firebase';

const app= initializeApp({
    apiKey: "AIzaSyCedRp3Ue7H9l_jQ2eipsd-XJ2JztzVsJE",
    authDomain: "smallchain-557b8.firebaseapp.com",
    databaseURL: "https://smallchain-557b8.firebaseio.com",
    projectId: "smallchain-557b8",
    storageBucket: "smallchain-557b8.appspot.com",
    messagingSenderId: "548316122414"
});

app.firestore().settings({
   timestampsInSnapshots:true
});



export const db= app.firestore();
//exporting the database
export const auth= app.auth();
//exporting auth 
export const storage= app.storage();
//exporting the storage sdk
