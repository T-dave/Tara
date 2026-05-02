import { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Image, Dimensions, TouchableOpacity } from "react-native";
import useHook from "@/hooks/generalHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onboardingData } from "../data/onboardData";
import { ThemedText } from "@/components/themed-text";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Paginator from "@/components/paginator";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";


const { width } = Dimensions.get("window");
export default function OnboardScreen(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any> | null>(null);
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const { isLoading, setIsLoading } = useHook();
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollToNext = () => {
        if (currentIndex < onboardingData.length - 1) {
        flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
        finishOnboarding();
        }
    };
    const navigation = useRouter();
    const finishOnboarding = async () => {
        setIsLoading(true);
        navigation.replace("/auth");
        // try {
        // await AsyncStorage.setItem("onboardingSeen", "true");
        // setIsLoading(false);
        // router.navigate("/(tabs)");
        // } catch (e) {
        // setIsLoading(false);
        // console.error(e);
        //}
    };
    return(
        <View style={styles.container}>
            <FlatList
                data={onboardingData}
                renderItem={({ item }) => 
                <ImageBackground source={{uri: item}} style={styles.image}>
                    <View style={{height:'100%', backgroundColor:"#00000050"}}/>
                </ImageBackground>}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={flatListRef}
            />
             <View style={styles.bottom}>
                <View style={styles.bottomView}>
                    <View style={{width:"80%"}}>
                        <ThemedText lightColor="#FFF" darkColor="#000" type="title">Welcome to Mabel&apos;s Measure</ThemedText>
                        <ThemedText style={styles.desc} lightColor="#FFF" darkColor="#000">
                                The home of high quality clothes tailored to your exact taste
                        </ThemedText>
                    </View>
                    <View>
                        <View style={styles.right}>
                            <TouchableOpacity style={styles.next} onPress={scrollToNext}>
                                <MaterialIcons size={23} name='chevron-right' color="#01041D"/>
                            </TouchableOpacity>
                        </View>
                        <Paginator data={onboardingData} currentIndex={currentIndex}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    desc: {
    marginTop: 12,
    opacity: 0.8,
  },
  image: {
    flex:1,
    width:width
  },
  bottom:{
    position:'absolute',
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    
  },
  next:{
    backgroundColor:"#FFF",
    width:40, 
    height:40,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  bottomView:{
    flexDirection:'row',
    alignItems:'center',
    padding:20,
    paddingBottom:60,
    justifyContent:'space-between'
  },
  right:{
    alignItems:'center'    
  }
});