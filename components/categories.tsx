import { Dimensions, FlatList, ImageBackground, ImageBackgroundProps, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";

interface CategoriesProps extends ImageBackgroundProps{
    data: any;
}

const { width } = Dimensions.get("window");
export default function Categories({style, data}:CategoriesProps){
    useEffect(() => {
    if (!data.length) return;

    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
        const nextIndex =
            prevIndex < data.length - 1 ? prevIndex + 1 : 0;

        flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        });

        return nextIndex;
        });
    }, 3000);

    return () => clearInterval(interval);
    }, [data]);
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any> | null>(null);
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
    }
    }).current;
    const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    }).current;
    return(
        <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        ref={flatListRef}
        renderItem={({item})=>
        <ImageBackground source={{uri: item.image}} style={[styles.image, style]}>
            <View style={styles.inner}>
                <ThemedText type='title' style={styles.title}>{item.title}</ThemedText>
            </View>
        </ImageBackground>
        }
        />
    )
}

const styles = StyleSheet.create({
    inner:{
        backgroundColor:'#00000033',
        flex:1,
        justifyContent:'flex-end',
        padding:20
    },
    image:{
        height:250,
        width
    },
    title:{
        color:'#FFF',
    }
});