import { ImageBackground, ImageBackgroundProps, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

interface NewCollectionProps extends ImageBackgroundProps{
    image: string;
    title: string;
}

export default function NewCollection({image, title, style}: NewCollectionProps){
    return(
        <ImageBackground source={{uri: image}} style={[styles.image, style]}>
            <View style={styles.inner}>
                <ThemedText type='title' style={styles.title}>{title}</ThemedText>
            </View>
         </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inner:{
        backgroundColor:'#00000033',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:20
    },
    image:{
        height:350,
    },
    title:{
        color:'#FFF',
    }
});