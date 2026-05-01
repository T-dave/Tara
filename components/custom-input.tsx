import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dispatch, SetStateAction, useState } from "react";

interface InputProps{
    label?: string;
    placeholder?: string;
    value: string;
    error: string | null;
    setError: Dispatch<SetStateAction<string | null>>;
    handleError: ()=>void;
    handleText: (text:string)=>void;
    password?: boolean;
    clear?: ()=>void;
}

export default function Input({label, placeholder="", value, error, setError, handleError, handleText, password, clear}:InputProps){
    const [ passwordSecure, setPasswordSecure ] = useState(true);
    return(
        <View style={{marginVertical:5}}>
        <ThemedView style={styles.container}>
            {
                label &&
                <ThemedText type="smallBold" style={{color:'#00000070'}}>{label}</ThemedText>
            }
            <View style={styles.inputView}>
                <TextInput 
                placeholder={placeholder} 
                style={styles.input}
                value={value}
                onChangeText={(text)=>handleText(text)}
                onFocus={()=>setError("")}
                onBlur={handleError}
                secureTextEntry={passwordSecure && password}
                />
                {
                    password ?
                    <TouchableOpacity onPress={()=>setPasswordSecure(!passwordSecure)}>
                        <MaterialIcons name={ passwordSecure?"visibility":"visibility-off"} size={20} color={"#DADADA"}/>
                    </TouchableOpacity>
                    :
                    clear ?
                    <TouchableOpacity onPress={clear}>
                        <MaterialIcons name={ "clear"} size={20} color={"#DADADA"}/>
                    </TouchableOpacity>
                    :
                    error?.length ?
                    <MaterialIcons name="cancel" size={20} color={"red"}/>
                    :
                    error === null ?
                    <MaterialIcons name="check" size={20} color={"green"}/>
                    :
                    <></>
                }
                
            </View>
        </ThemedView>
        <ThemedText type="small" style={styles.error}>
            {error}
        </ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:7,
        borderRadius:8,
    },
    inputView:{
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        flex:1
    },
    error:{
        color:'red',
        alignSelf:'flex-end'
    }
});