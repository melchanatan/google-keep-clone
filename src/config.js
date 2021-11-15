require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "not-keep.firebaseapp.com",
    projectId: "not-keep",
    storageBucket: "not-keep.appspot.com",
    messagingSenderId: "643263663525",
    appId: "1:643263663525:web:fa6eb39b7421eecb64ec4c",
    measurementId: "G-8EM6RZG0L4"
};

export default firebaseConfig;