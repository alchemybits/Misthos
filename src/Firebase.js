import * as firebase from "firebase";
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBQQZxECsX4B_USXWlyMXe3nfec147Siz0",
  authDomain: "misthos-v1.firebaseapp.com",
  databaseURL: "https://misthos-v1.firebaseio.com",
  projectId: "misthos-v1",
  storageBucket: "misthos-v1.appspot.com",
  messagingSenderId: "952459612409"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/");
export const productos = firebase.database().ref("Productos/");
export const featuredProductos = firebase.database().ref("Productos/");
export const requests = firebase.database().ref("Requests/");
export const Users = firebase.database().ref("users/");
export const thumbnails = firebase.database().ref("images/");
export const Carts = firebase.database().ref("Carts/");
export const db = firebase.firestore();
