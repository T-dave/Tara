import { ImageBackground, StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Rating from "./rating";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import useHook from "@/hooks/generalHook";

interface ProductType extends ViewProps{
    type: string;
    image: string;
    company:string;
    name:string;
    rating: string;
    review:string;
    newPrice:string;
    oldPrice:string;
}
export default function Product({type, image, style, company, name, rating, review, newPrice, oldPrice}:ProductType){
    const [liked, setLiked] = useState(false);
    const { savings } = useHook();
    const savingsPercent = savings(oldPrice, newPrice);
    return(
        <TouchableOpacity style={style}>
            <ImageBackground style={styles.image} source={{uri:image}} imageStyle={{borderRadius:10}}>
                <View style={styles.imageView}>
                    {
                        type === "sale" ?
                        <View style = {[styles.typeView, {backgroundColor:Colors.primary,}]}>
                            <ThemedText style={{color:'#FFF'}} type="small">-{savingsPercent}%</ThemedText>
                        </View>
                        :
                        type === "new" ?
                        <View style = {[styles.typeView, {backgroundColor:'#000',}]}>
                            <ThemedText style={{color:'#FFF'}} type="small">New</ThemedText>
                        </View>
                        :
                        <></>
                    }
                    <TouchableOpacity onPress={()=>setLiked((liked)=>!liked)}>
                        <ThemedView style={styles.likeView}>
                            {
                                liked ?
                                <MaterialIcons name="favorite" size={20} color={Colors.primary}/>
                                :
                                <MaterialIcons name="favorite-border" size={20}/>
                            }
                        </ThemedView>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Rating rating={rating} review={review}/>
            <ThemedText lightColor="gray" style={styles.text}>{company}</ThemedText>
            <ThemedText style={{fontWeight:'700'}}>{name}</ThemedText>
            <View style={styles.prices}>
                {
                    type === 'sale' && Number(oldPrice) > Number(newPrice) &&
                    <ThemedText style={[styles.text, styles.oldPrice]} lightColor="grey">${oldPrice}</ThemedText>
                }
                <ThemedText style={styles.text} lightColor={Colors.primary}>${newPrice}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:'100%',
    },
    imageView:{
        height:'100%',
        padding:5,
        paddingBottom:0,
        justifyContent:'space-between'
    },
    typeView:{
        padding:6,
        borderRadius:8,
        color:'#FFF',
        alignSelf:'flex-start'
    },
    likeView:{
        alignSelf:'flex-end',
        borderRadius:50,
        padding:7,
        top:14
    },
    text:{
        fontSize:14,
        lineHeight:18
    },
    prices:{
        flexDirection:'row'
    },
    oldPrice:{
        textDecorationLine:'line-through',
        marginRight:3
    }
});