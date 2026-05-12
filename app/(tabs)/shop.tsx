import CategoryCard from "@/components/category-card";
import Container from "@/components/custom-component";
import SummerSales from "@/components/summer-sales";
import { ThemedText } from "@/components/themed-text";
import { usePictures } from "@/hooks/pictures-hook";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Shop() {
  const { products } = usePictures();
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const data = [];
    for (let category in products) {
      data.push(category);
    }
    setCategories(data);
  }, []);
  return (
    <Container lightColor="#FEFCFC" style={{paddingHorizontal:20}}>
      <SummerSales />
      {
        categories.map((category, index) => {
            const product = products[category][0];
            return (
            <CategoryCard image={product.image} category={category} key={index}/>
        );
      })}
    </Container>
  );
}
