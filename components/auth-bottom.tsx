import { View, Image, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function Bottom({type}:{type:string}){
    return(
            <View style={styles.bottom}>
                <ThemedText>
                    Or {type} with social account
                </ThemedText>
                <View style={styles.socials}>
                    <ThemedView style={styles.socialView}>
                        <Image source={require("../assets/images/googlePic.png")} style={styles.social} resizeMode="contain"/>
                    </ThemedView>
                    <ThemedView style={styles.socialView}>
                        <Image source={require("../assets/images/facebookPic.png")} style={styles.social} resizeMode="contain"/>
                    </ThemedView>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
     bottom:{
        alignSelf:'center',
        marginBottom:30,
    },
    socials:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    socialView:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        paddingHorizontal:40,
        borderRadius:27
    },
    social:{
        width:20,
        height:20
    }
});