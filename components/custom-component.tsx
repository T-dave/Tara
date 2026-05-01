import { useThemeColor } from "@/hooks/use-theme-color";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { ScrollView, ScrollViewProps, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps extends ScrollViewProps{
    lightColor?: string;
    darkColor?: string;
    back?: boolean;
}
export default function Container({lightColor, darkColor, style, back, children}:ContainerProps){
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return(
        <ScrollView style={ {backgroundColor} } contentContainerStyle={{flexGrow:1}}>
            <SafeAreaView style={styles.container}>
                {
                    back &&
                    <TouchableOpacity onPress={()=>router.back()} style={{padding:3}}>
                        <MaterialIcons name="chevron-left" size={40}/>
                    </TouchableOpacity>
                }
                <View style={[styles.container, style]}>
                    {children}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});