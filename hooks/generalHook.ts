import { useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "@/src/lib/firebase";
import { AccessService } from "@/src/services/access.service";

export default function useHook() {
  const [isLoading, setIsLoading] = useState(false);
  const showTitle = (title:string, length=25)=>{
    if(title.length < length) return title
    else return title.slice(0,length) + "..."
  }
  const savings = (oldPrice: string, newPrice: string)=>{
    const oldNum = Number(oldPrice);
    const newNum = Number(newPrice);
    return Math.round(((oldNum - newNum) / oldNum) * 100)
  }
  const collectionData = async (collection:string) => {
    try {
      const data = await AccessService.getById(collection);
      return data
    } catch (err) {
      console.log('Error fetching access:', err);
    }
  };
    // querySnapshot.forEach((doc) => {
    //   data.push(doc.data());
    //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    // });
  
  return {
    isLoading,
    setIsLoading,
    showTitle,
    savings,
    collectionData
  };
}