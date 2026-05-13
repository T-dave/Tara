import { Modal, ModalProps, StyleSheet, TouchableOpacity, View } from "react-native"
import { ThemedText } from "./themed-text"
import { Dispatch, SetStateAction, useState } from "react";
import { Colors } from "@/constants/theme";

interface CustomModalProps extends ModalProps{
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    title: string;
}

interface CategoryModalProps extends ModalProps{
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    categorySelect: number;
    setSelect: Dispatch<SetStateAction<number>>;
}
interface CategoryProps{
    category: string;
    num: number;
    
}

export function CustomModal({isVisible, setIsVisible, children, title}:CustomModalProps){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
                <TouchableOpacity style={{flex:1}} onPress={() => setIsVisible(false)}></TouchableOpacity>
                <View style={styles.modal}>
                    <View style={styles.top}>
                        <View style={styles.line}/>
                        <ThemedText style={{fontSize:18, fontWeight:400}}>{title}</ThemedText>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export function CategoryModal({isVisible, setIsVisible, categorySelect, setSelect}: CategoryModalProps){
    function Category({category, num}:CategoryProps){
        const handlePress = ()=>{
            setSelect(num)
            setIsVisible(false)
        }
        return(
            <TouchableOpacity
                style={[styles.sort, {backgroundColor:categorySelect === num ? Colors.primary : '#FFF'}]}
                onPress={handlePress}
            >
                <ThemedText style={{color:categorySelect === num ? '#FFF': '#000'}}>{category}</ThemedText>
            </TouchableOpacity>
        )
    }
    return(
        <CustomModal isVisible={isVisible} setIsVisible={setIsVisible} title="Sort by">
            <View style={{marginTop:15}}>
                <Category category="Popular" num={1}/>
                <Category category="Newest" num={2}/>
                <Category category="Customer Review" num={3}/>
                <Category category="Price: Lowest to Highest" num={4}/>
                <Category category="Price: Highest to Lowest" num={5}/>
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    top:{
        alignSelf:'center',
    },
    line:{
        height:6,
        backgroundColor:'#979797',
        marginTop:15,
        marginBottom:8,
        borderRadius:10
    },
    sort:{
        paddingVertical:8,
        paddingHorizontal:20
    }
});