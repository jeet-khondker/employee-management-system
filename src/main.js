import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from "firebase"

const config = {
    apiKey: "AIzaSyBvd_sNPS3lksyshV2t35YRyJpqO9adR_o",
    authDomain: "employee-manager-9acf8.firebaseapp.com",
    databaseURL: "https://employee-manager-9acf8.firebaseio.com",
    projectId: "employee-manager-9acf8",
    storageBucket: "employee-manager-9acf8.appspot.com",
    messagingSenderId: "420642554993"
};

firebase.initializeApp(config)


createApp(App).use(router).mount('#app')
