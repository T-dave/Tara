import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';


// interface PictureType {
//   banner: string;
//   id: string;
// }
// interface PictureContextType{
//   pictures: any[];
//   setPictures: Dispatch<SetStateAction<any[]>>
// }


export const PicturesContext = createContext<any | undefined>(undefined);

export const PicturesProvider = ({ children }: { children: ReactNode }) => {
  const [pictures, setPictures] = useState<any[]>([]);
  const [newProd, setNew] = useState<any[]>([]);
  const newProducts: any[] = [];
  useEffect(()=>{
    for(let data in newProd){
        if(data !== 'id'){
            newProducts.push(newProd[data]);
        }
      }
  },[newProd])


  return (
    <PicturesContext.Provider value={{ newProducts, setNew, pictures, setPictures }}>
      {children}
    </PicturesContext.Provider>
  );
};
