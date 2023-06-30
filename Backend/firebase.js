const {initializeApp,cert} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID
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
