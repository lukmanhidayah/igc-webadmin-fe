import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pedemobile-e8bfd.firebaseapp.com",
  databaseURL: "https://pedemobile-e8bfd.firebaseio.com",
  projectId: "pedemobile-e8bfd",
  storageBucket: "pedemobile-e8bfd.appspot.com",
  messagingSenderId: "113270987592",
  appId: "1:113270987592:web:3638e793e54238a430317d",
  measurementId: "G-RQHQ9CFXM8",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firebase Authentication
export const auth = getAuth(app);
