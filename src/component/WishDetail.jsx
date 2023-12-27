import { View,Text , StyleSheet, TouchableOpacity, FlatList,Pressable,Image} from "react-native"


function WishDetail({navigation, route}){

   const {description, thumbnail,title}=route.params
   console.log(thumbnail) 
return(
    <View style={styles.container} >
        <Text>{title}</Text>
        <Text>{description} </Text>
      <Image source={thumbnail} style={styles.img} />
    
    </View>
)
}
export default  WishDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,       
        alignItems: "center",
        justifyContent: "center",
      },
    img: {
 width:"100%",
      height:300      }
   
  });