import { StyleSheet,Text, View,Image } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import Colors from '../constants/Colors';
import products from '@/assets/data/products';



const product = products[1];


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}}  style={styles.Image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:10,
    borderRadius:20,

  },
  title: {
    fontSize: 18,
    fontWeight: '700', 
    marginVertical: 10,
    
  },
  price:{
     color: Colors.light.tint,  
     fontWeight: 'bold',

  },
  Image:{
    width: '100%',
    aspectRatio: 1,
  },
});
  