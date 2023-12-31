import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2bUFlil71IrKADQlOnnn4J-fEqRfi_ZY',
  authDomain: 'clothing-store-db-fd548.firebaseapp.com',
  projectId: 'clothing-store-db-fd548',
  storageBucket: 'clothing-store-db-fd548.appspot.com',
  messagingSenderId: '819355626335',
  appId: '1:819355626335:web:3e81e5d5f5cd4a1d6664ea',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};

export const addCollectionAndDocuments = async (collectionKey, objects) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objects.forEach((obj) => {
    const docRef = doc(collectionReference, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(db, 'categories');
  const q = query(collectionReference);

  const querySnapshop = await getDocs(q);
  const categoryMap = querySnapshop.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
