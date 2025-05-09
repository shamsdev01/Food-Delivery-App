import { StyleSheet,Text, View,Image } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '../components/ProductList';




export default function MenuScreen() {
  return (
   <View>
    <ProductListItem product={products[5]}/>
    <ProductListItem product={products[1]}/>
   </View>
  );
}
 
const styles = StyleSheet.create({
 
});
  