import { firebaseConfig } from "firebase-functions"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import config from "../config/firebase.config"

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
