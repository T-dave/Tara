import Button from "@/components/custom-button";
import Container from "@/components/custom-component2";
import { CategoryModal } from "@/components/modal";
import Product from "@/components/product";
import { Colors } from "@/constants/theme";
import { usePictures } from "@/hooks/pictures-hook";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Modal, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Category() {
    const { category } = useLocalSearchParams();
    const { products } = usePictures();
    const [isVisible, setIsVisible] = useState(false);
    const [categorySelect, setSelect] = useState(4);
  return (
    <Container back search title={category.toString()}>
        <FlatList
            data={products[category.toString()]}
            keyExtractor={(item, i)=>i.toString()}
            numColumns={2}
            contentContainerStyle={{gap:20, padding:20}}
            columnWrapperStyle={{gap:20}}
            renderItem={({item, index})=>(
                <Product 
                    image={item.image}
                    company={item.company}
                    name={item.name}
                    rating={item.rating}
                    review={item.review}
                    newPrice={item.newPrice}
                    oldPrice={item.oldPrice}
                    style={styles.card}
                    sale
                />
            )}
        />
        <View style={styles.filterView}>
            <TouchableOpacity style={styles.filter}onPress={() => setIsVisible(true)}>
                <MaterialIcons name="filter-list" size={25} color={"#FFF"}/>
            </TouchableOpacity>
        </View>
        <CategoryModal isVisible={isVisible} setIsVisible={setIsVisible} categorySelect={categorySelect} setSelect={setSelect}/>
    </Container>
  );
}

const styles = StyleSheet.create({
    card:{
        flex:1
    },
    filterView:{
        height:'80%',
        width:'95%',
        position:'absolute',
        justifyContent:'flex-end',
    },
    filter:{
        backgroundColor:Colors.primary,
        borderRadius:60,
        padding:15,
        alignSelf:'flex-end'
    }
});