import { Dimensions, StyleSheet, View } from "react-native"
import { PictureCard1, PictureCard2, PictureCard3, PromoCard } from "./picture-card"
import { usePictures } from "@/hooks/pictures-hook";

const { height } = Dimensions.get("window");
export default function Promo(){
    const { pictures } = usePictures();
    return(
        <View>
            <PictureCard1 image={pictures.newCollection} title='New Collection' style={{height:height/2}}/>
                <View style={styles.bottom}>
                    <View style={styles.left}>
                        <PromoCard title='Summer Sale' style={{height:height/4}}/>
                        <PictureCard2 title='Black' image={pictures.black} style={{height:height/4, width:'100%'}}/>
                    </View>
                    <PictureCard3 title="Men's Hoodies" image={pictures.hoodie} style={{height:'100%', width:'50%'}} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom:{
    flexDirection:'row',
    height:height/2
  },
  left:{
    width:"50%"
  }
});