import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from "firebase"

const config = {
    apiKey: "key-that-cannot-be-shared",
    authDomain: "employee-manager-9acf8.firebaseapp.com",
    databaseURL: "https://employee-manager-9acf8.firebaseio.com",
    projectId: "employee-manager-9acf8",
    storageBucket: "employee-manager-9acf8.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx"
};

firebase.initializeApp(config)


createApp(App).use(router).mount('#app')
