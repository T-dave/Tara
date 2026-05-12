import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

export default function SummerSales(){
    return(
        <View style={styles.container}>
            <ThemedText type="subtitle" style={{color:'#FFF'}}>SUMMER SALES</ThemedText>
            <ThemedText type="small" style={{color:'#FFF'}}>Up to 50% off</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        height:100,
        backgroundColor:Colors.primary
    }
});