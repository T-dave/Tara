import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import Product from "./product";
import { usePictures } from "@/hooks/pictures-hook";
import useHook from "@/hooks/generalHook";
import { useEffect } from "react";

export default function New(){
    const { newProducts } = usePictures();
    const { savings } = useHook();
    // const savingsPercent = savings(newProducts.product2.oldPrice, newProducts.product2.newPrice);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <ThemedText type="title">New</ThemedText>
                    <ThemedText>You&apos;ve never seen it before</ThemedText>
                </View>
                <TouchableOpacity>
                    <ThemedText type="small">View all</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={styles.products}>
                <FlatList
                keyExtractor={(item, i)=>i.toString()}
                data={newProducts}
                horizontal
                showsHorizontalScrollIndicator={false}  
                renderItem={({item})=>(
                    <Product 
                        type="new" 
                        image={item.image}
                        style={{marginLeft:20}}
                        company={item.company}
                        name={item.name}
                        rating={item.rating}
                        review={item.review}
                        newPrice={item.newPrice}
                    />
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    top:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        paddingHorizontal:20
    },
    products:{
        flexDirection:'row',
    }
});