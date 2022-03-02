import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyA4XIMEr83pVCdpApvUojIG4RYoruwRAfc',
   authDomain: 'tesla-clone-b6fcf.firebaseapp.com',
   projectId: 'tesla-clone-b6fcf',
   storageBucket: 'tesla-clone-b6fcf.appspot.com',
   messagingSenderId: '612428337878',
   appId: '1:612428337878:web:1f88e942adc36600112f77',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
