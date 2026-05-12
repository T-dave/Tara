import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { usePictures } from "@/hooks/pictures-hook";
import useHook from "@/hooks/generalHook";

export default function IndexScreen(){
    const { setPictures, setBan, setProducts } = usePictures();
    const { collectionData } = useHook();
    useEffect(()=>{
        const load = async()=>{
            const onboard = await AsyncStorage.getItem("onboard");
            const user = await AsyncStorage.getItem("user");
            if(onboard === "true"){
                if(user){
                    const picturesData = await collectionData('pictures');
                    const bannerData = await collectionData('banner');
                    const productsData = await collectionData('products');
                    setProducts(productsData ?? []);
                    setPictures(picturesData ?? []);
                    setBan(bannerData?.banner ?? []);
                    router.replace("/(tabs)");
                }else{
                    router.replace("/auth")
                }
            }else{
                router.replace("/onboard");
            }
        }
        load();
    },[]);

    return(
        <View style={styles.container}>
            <ActivityIndicator size={60} color={Colors.primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
