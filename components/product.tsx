import { ImageBackground, StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Rating from "./rating";
import { Colors } from "@/constants/theme";

interface ProductType extends ViewProps{
    type: string;
    image: string;
    savings?:number;
    company:string;
    name:string;
    rating: string;
    review:string;
    newPrice:string;
}
export default function Product({type, image, savings, style, company, name, rating, review, newPrice}:ProductType){
    return(
        <TouchableOpacity style={style}>
            <ImageBackground style={styles.image} source={{uri:image}} imageStyle={{borderRadius:10}}>
                <View style={styles.imageView}>
                    {
                        savings ?
                        <View style = {[styles.typeView, {backgroundColor:Colors.primary,}]}>
                            <ThemedText style={{color:'#FFF'}} type="small">-{savings}%</ThemedText>
                        </View>
                        :
                        type === "new" ?
                        <View style = {[styles.typeView, {backgroundColor:'#000',}]}>
                            <ThemedText style={{color:'#FFF'}} type="small">New</ThemedText>
                        </View>
                        :
                        <></>
                    }
                    <TouchableOpacity>
                        <ThemedView style={styles.likeView}>
                            <MaterialIcons name="favorite-border" size={20}/>
                        </ThemedView>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Rating rating={rating} review={review}/>
            <ThemedText>{company}</ThemedText>
            <ThemedText>{name}</ThemedText>
            <ThemedText>{newPrice}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:150,
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
    }
});