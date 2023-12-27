import { View,Text , StyleSheet, TouchableOpacity, FlatList,Pressable} from "react-native"
import { colors } from "../Global/color";

function Wishlist({navigation, route}){
    console.log(route)
return(
    
        <View style={styles.container}>
        <FlatList
        data={route.params}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <View style={styles.wish}><Text>{item.title}</Text> <Pressable style={styles.Pressable} onPress={()=>navigation.navigate("Wish",item)}>ver detalle</Pressable></View>}
      /></View>
    
)
}
export default Wishlist
const styles = StyleSheet.create({
    container: {
        flex: 1,       
        alignItems: "center",
        justifyContent: "center",
      },
      wish:{
        marginTop:15

      },
    Pressable:{
        borderWidth: 1,
        borderColor:colors.morado,
        padding:5,
        marginTop:5,
        borderRadius: 5,
        alignItems:"center"
    
      }
  });