import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChTQQQ1Ow5K-zx7qtD7KvQLepIFJKkTrc",
  authDomain: "test-shop-sami-keijonen.firebaseapp.com",
  databaseURL: "https://test-shop-sami-keijonen.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is a default export.
export default base;