const {initializeApp,cert} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyCX-PWremF5pIeS3IpNtLI8GuxVW8pN5tg",
  authDomain: "cloth-shop-7dd19.firebaseapp.com",
  databaseURL: "https://cloth-shop-7dd19-default-rtdb.firebaseio.com",
  projectId: "cloth-shop-7dd19",
  storageBucket: "cloth-shop-7dd19.appspot.com",
  messagingSenderId: "82978736710",
  appId: "1:82978736710:web:f4d74a6d4fbbd37fc91847"
};

const serviceAccount =  require('./serviceAccountKey.json');



var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cloth-shop-7dd19-default-rtdb.firebaseio.com"
});

const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true })
module.exports = {db};