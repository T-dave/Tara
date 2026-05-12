import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const AccessService = {
  // Get ALL access documents
  async getAll() {
    const snapshot = await getDocs(collection(db, 'Tara'));

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Get ONE document
  async getById(id: string) {
    const snap = await getDoc(doc(db, 'Tara', id));

    if (!snap.exists()) return null;

    return {
      ...snap.data()
    };
  }
};