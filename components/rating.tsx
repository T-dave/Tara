import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

interface RatingProps{
    rating:string;
    review:string;
}

export default function Rating({rating, review}:RatingProps){
    const ratingNumber = Number(rating);
    // const displayRatings = ()=>{
    //     for(let x = ratingNumber; x>0; x--){
    //         return(
    //             <MaterialIcons name="star" color={'yellow'} size={20}/>
    //         )
    //     }
    // }
    return(
        <View>
            <View style={styles.starView}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <MaterialIcons 
                    name={index < ratingNumber ? "star" : "star-outline"} 
                    color={'yellow'}
                    size={15}
                    key={index}
                    />
                ))}
                <ThemedText type="small" style={{marginLeft:5}}>
                    ({review})
                </ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    starView:{
        flexDirection:'row',
        alignItems:'center'
    }
});