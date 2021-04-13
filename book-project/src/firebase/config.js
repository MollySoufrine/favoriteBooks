import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.VUE_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_PUBLIC_FIREBASE_APP_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// export firestore
export { projectFirestore };
