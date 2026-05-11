import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import Product from "./product";

interface NewProps{
    title: string;
    description: string;
    type: string;
    data: any;
}

export default function ProductsSection({title, description, type, data}:NewProps){
    
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <ThemedText type="title">{title}</ThemedText>
                    <ThemedText>{description}</ThemedText>
                </View>
                <TouchableOpacity>
                    <ThemedText type="small">View all</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={styles.products}>
                <FlatList
                keyExtractor={(item, i)=>i.toString()}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}  
                renderItem={({item, index})=>(
                    <Product 
                        type={type}
                        image={item.image}
                        style={[styles.product, {marginRight:index === data.length-1 ? 20 : 0}]}
                        company={item.company}
                        name={item.name}
                        rating={item.rating}
                        review={item.review}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
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
    },
    product:{
        marginLeft:20,
        width:145
    }
});