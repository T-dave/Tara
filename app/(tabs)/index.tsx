import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import Container from '@/components/custom-component';
import Button from '@/components/custom-button';
import { usePictures } from '@/hooks/pictures-hook';
import ProductsSection from '@/components/products-section';
import Categories from '@/components/categories';
import Promo from '@/components/promo';

const { height } = Dimensions.get("window");
export default function HomeScreen() {
  const { pictures, products, banner } = usePictures();
  return (
    <Container style={styles.container} edges={['bottom']} lightColor="#FFFCFC">
      {
        pictures ?
        <ImageBackground source={{uri:pictures.banner}} style={styles.banner}>
          <View style={styles.innerBanner}>
            <View style={{width:'50%'}}>
            <ThemedText type='title' style={{color:'#FFF', fontSize:40}}>
              Fashion sale
            </ThemedText>
             <Button text='Check' onPress={()=>console.log("Hii")} style={{marginTop:10}}/>
            </View>
          </View>
        </ImageBackground>
        :
        <View style={styles.activity}>
          <ActivityIndicator size={50}/>
        </View>
      }
      <ProductsSection
      title='New'
      description="You've never seen it before"
      type='new'
      data={products.New}
      />
      <Categories data={banner}/>
      <ProductsSection
      title='Sale'
      description="Super summer sale"
      type='sale'
      data={products.Sale}
      />
      <View style={styles.promo}>
        <Promo/>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  banner:{
    height:500,
  },
  activity:{
    height:500,
    alignItems:'center',
    justifyContent:'center'
  },
  innerBanner:{
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:15,
    backgroundColor:"#00000030",
    paddingBottom:25
  },
  promo:{
    height
  },
});
