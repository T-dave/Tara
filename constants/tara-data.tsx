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
  const [products, setProducts] = useState<any>();
  const [banner, setBan] = useState<any[]>([]);
  return (
    <PicturesContext.Provider value={{ products, setProducts, pictures, setPictures, banner, setBan }}>
      {children}
    </PicturesContext.Provider>
  );
};
