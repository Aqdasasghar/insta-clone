import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
//
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

//

const firebaseConfig = {
  apiKey: "AIzaSyAw9NElXo60PETbK_o7tQPFiD9UEz0r9Ts",
  authDomain: "hackathon-a4163.firebaseapp.com",
  projectId: "hackathon-a4163",
  storageBucket: "hackathon-a4163.appspot.com",
  messagingSenderId: "440380554114",
  appId: "1:440380554114:web:000fbbca1ad3068c8aad9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export const facebook = new FacebookAuthProvider();

//  SINGN_UP

export async function signUp(userInfo) {
  console.log(userInfo, "USerINFO");
  const { name, email, password } = userInfo;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Sign Up Success");
  } catch (error) {
    alert(error.message);
  }
}

//  LOGIN
export async function logIn(userInfo) {
  const { email, password } = userInfo;
  try {
    await signInWithEmailAndPassword, (auth, email, password);
    alert("Log In Success");
  } catch (error) {
    alert(error.message);
  }
}

// Add-Post in firebase
export async function userCardItem(itemInfo) {
  try {
    const { img, des } = itemInfo;
    const storageRef = ref(storage, `images/${img.name}`);
    await uploadBytes(storageRef, img);
    const imgUrl = await getDownloadURL(storageRef);
    console.log(imgUrl,'imgurl');
    await addDoc(collection(db, "userItem"), {
      description: des,
      image: imgUrl,
    });
    console.log('done');
    alert("Post successfully!");
  } catch (e) {
    alert(e.message);
  }
}

// get Post from firebase
export async function getingAds() {
  const querySnapshot = await getDocs(collection(db, "userItem"));
  const ads = [];
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}

// Update Profile

export async function updateProfile(itemInfo) {
  try {
    const { img } = itemInfo;
    const storageRef = ref(storage, `profile/${img.name}`);
    await uploadBytes(storageRef, img);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "profile"), {
      image: imgUrl,
    });
    alert("Post successfully!");
  } catch (e) {
    alert(e.message);
  }
}
export const FacebookAuth = async(provider) =>{
  console.log(provider)
  const fbAuth = signInWithPopup(auth, facebook);
  return fbAuth;
}
