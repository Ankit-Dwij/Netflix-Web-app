import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDIUXto85hqPcAqJaX1FOXK6jncfVrXz1k",
  authDomain: "netflixx-87650.firebaseapp.com",
  projectId: "netflixx-87650",
  storageBucket: "netflixx-87650.appspot.com",
  messagingSenderId: "569667888350",
  appId: "1:569667888350:web:c721e15f5dd84131fa0e4f",
  measurementId: "G-23358N89K4",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
