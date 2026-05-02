import { Colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";
import { useState } from "react";

interface CustomButtonProps extends TouchableOpacityProps{
    text: string;
    onPress: ()=>void;
}
export default function Button({text, onPress, style}:CustomButtonProps) {
    const [ loading, setLoading ] = useState(false)
    const handlePress=async()=>{
        setLoading(true);
        await onPress();
        setLoading(false);
    }
    return(
        <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
            {
                loading ?
                <ActivityIndicator size={30} color={"#FFF"}/>
                :
            <ThemedText style={{color:'#FFF'}}>
                {text}
            </ThemedText>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:10
    }
});