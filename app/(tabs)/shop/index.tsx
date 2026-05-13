import CategoryCard from "@/components/category-card";
import Container from "@/components/custom-component";
import SummerSales from "@/components/summer-sales";
import { usePictures } from "@/hooks/pictures-hook";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

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
  const handleRoute = (category:string) => router.navigate({
    pathname: "/(tabs)/shop/category",
    params: { category: category}
  });
  return (
    <Container style={{ paddingHorizontal: 20 }}>
      <SummerSales />
      {categories.map((category, index) => {
        const product = products[category][0];
        return (
          <TouchableOpacity
            onPress={()=>handleRoute(category)}
            key={index}
          >
            <CategoryCard image={product.image} category={category} />
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}
