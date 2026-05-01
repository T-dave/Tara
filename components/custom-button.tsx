import { Colors } from "@/constants/theme";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";

interface CustomButtonProps extends TouchableOpacityProps{
    text: string;
    onPress: ()=>void;
}
export default function Button({text, onPress, style}:CustomButtonProps) {
    return(
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <ThemedText style={{color:'#FFF'}}>
                {text}
            </ThemedText>
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