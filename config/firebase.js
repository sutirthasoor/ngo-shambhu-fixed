// config/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCSpFheSyB8ML2A8Ot7-9Zc2D55pAqBttE",
  authDomain: "ngo-app-54121.firebaseapp.com",
  projectId: "ngo-app-54121",
  storageBucket: "ngo-app-54121.firebasestorage.app",
  messagingSenderId: "860187159774",
  appId: "1:860187159774:android:6dfee16f67197e6c7da64f"
};

const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth IMMEDIATELY (NO try/catch, NO getAuth())
console.log('🔥 Initializing Firebase Auth with persistence...');
const authInstance = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
console.log('✅ Firebase Auth initialized');

// ✅ Just return the existing instance
export const getAuthInstance = () => {
  return authInstance;
};

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;