import { Dimensions, ImageBackground, ImageBackgroundProps, StyleSheet, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface PictureCard1Props extends ImageBackgroundProps{
    image: string;
    title: string;
}
interface PromoCardProps extends ViewProps{
    title: string;
}

const { width } = Dimensions.get("window");
export function PictureCard1({image, title, style}: PictureCard1Props){
    return(
        <ImageBackground source={{uri: image}} style={[styles.image, style]} imageStyle={{height:'100%'}}>
            <View style={[styles.inner, {alignItems:'flex-end'}]}>
                <ThemedText type='title' style={styles.title}>{title}</ThemedText>
            </View>
         </ImageBackground>
    )
}

export function PictureCard2({image, title, style}:PictureCard1Props){
    return(
        <ImageBackground source={{uri: image}} style={[styles.image2, style]}>
            <View style={styles.inner}>
                <ThemedText type='title' style={styles.title}>{title}</ThemedText>
            </View>
        </ImageBackground>
    )
}

export function PictureCard3({image, title, style}:PictureCard1Props){
    return(
        <ImageBackground source={{uri: image}} style={[styles.image2, style]} imageStyle={{width:'100%'}}>
            <View style={[styles.inner, {alignItems:'center', justifyContent:'center'}]}>
                <ThemedText type='title' style={styles.title}>{title}</ThemedText>
            </View>
        </ImageBackground>
    )
}

export function PromoCard({title, style}:PromoCardProps){
    return(
        <View style={[styles.promoCard, style]}>
            <ThemedText type="title" style={{color:Colors.primary}}>{title}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    inner:{
        backgroundColor:'#00000033',
        flex:1,
        justifyContent:'flex-end',
        padding:20
    },
    image:{
        height:350,
    },
    title:{
        color:'#FFF',
    },
    image2:{
        height:250,
        width
    },
    promoCard:{
        alignItems:'center',
        justifyContent:'center',
        padding:20
    }
});