import { useThemeColor } from "@/hooks/use-theme-color";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    lightColor?: string;
    darkColor?: string;
    back?: boolean;
}
export default function Container({lightColor, darkColor, style, back, children, edges=['top']}:ContainerProps){
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return(
        <ScrollView style={ {backgroundColor} } contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container} edges={edges}>
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