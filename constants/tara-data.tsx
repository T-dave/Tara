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
  const [newBan, setBan] = useState<any[]>([]);
  const newProducts: any[] = [];
  const banner: any[] = [];
  useEffect(()=>{
    for(let data in newProd){
        if(data !== 'id'){
            newProducts.push(newProd[data]);
        }
      }
      for(let data in newBan){
        if(data !== 'id'){
            banner.push(newBan[data]);
        }
      }
  },[newProd, newBan])


  return (
    <PicturesContext.Provider value={{ newProducts, setNew, pictures, setPictures, banner, setBan }}>
      {children}
    </PicturesContext.Provider>
  );
};
