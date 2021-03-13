import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCR6Jxev5Uxeo2hOmoQv41S-73jill8vmw",
    authDomain: "crud-d5f88.firebaseapp.com",
    projectId: "crud-d5f88",
    storageBucket: "crud-d5f88.appspot.com",
    messagingSenderId: "390426558038",
    appId: "1:390426558038:web:b09c596a9c91af4956c5f7"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
