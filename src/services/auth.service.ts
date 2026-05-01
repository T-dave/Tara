import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const AuthService = {
  async signup(name:string, email: string, password: string) {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, 'users', userCred.user.uid), {
    name: name,
    email: userCred.user.email,
    avatar: 'https://scontent.fiba2-1.fna.fbcdn.net/v/t39.30808-6/320799673_5810517019035680_8329422440832000911_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHeA03W1fI6tY8HlDk3Blhpv4WBxte9VK2_hYHG171UrRUQ5hjdcEkqIKQrKlZuZtmXyVj8hKYOWw2Y2SQbYYmq&_nc_ohc=ORuxaaXW6K8Q7kNvwE4_hYu&_nc_oc=Ado79fdJFJz_kpGKAPKrwy5W6n5t7h_3fbA_Z9h04wSkHV3U0ZD2wcJECFbQF6SjFhE&_nc_zt=23&_nc_ht=scontent.fiba2-1.fna&_nc_gid=fPxOqYNByeezZIe1nfCJMA&_nc_ss=7b2a8&oh=00_Af0Q5sIU8tBSomL2Q3M6wntG81P0ZzotU7kyxA9QeR5aFQ&oe=69F43999',
    bio: '',
    settings: {
      notifications: true,
      darkMode: false,
      autoPlayVideos: true
    },
    createdAt: new Date()
  });
    return userCred.user;
  },

  async login(email: string, password: string) {
    const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCred.user;
  },

  async logout() {
    await signOut(auth);
  }
};

export const createUserProfile = async (user: any) => {
  await setDoc(doc(db, 'users', user.uid), {
    name: user.email.split('@')[0],
    email: user.email,
    avatar: 'https://ui-avatars.com/api/?name=' + user.email,
    bio: '',
    settings: {
      notifications: true,
      darkMode: false,
      autoPlayVideos: true
    },
    createdAt: new Date()
  });
};