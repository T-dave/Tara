import { useContext } from "react";
import { PicturesContext } from "@/constants/tara-data";

export const usePictures = () => {
  const context = useContext(PicturesContext);
  if (!context) {
    throw new Error('usePictures must be used within a PicturesProvider');
  }
  return context;
};
