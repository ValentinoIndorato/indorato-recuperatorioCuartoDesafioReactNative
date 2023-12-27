import { View,Text , StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
function Header ({goBack, screen}){
return(
    <View style={styles.container}>
        {screen!== "Bienvenido" 
        && <TouchableOpacity onPress={goBack}>
        <Ionicons name="caret-back-circle-outline" size={24} color="black" />
        </TouchableOpacity> }
        
        <Text style={styles.text}>{screen}</Text>
    </View>
)
}
export default Header
const styles= StyleSheet.create({
    container:{
       height:80,
       backgroundColor: "#ffff",
       justifyContent:"center",
       alignItems:"center",
       flexDirection: "row",
       gap:25,
       marginTop: 15,

    },
    text:{
        fontSize: 50,
        marginBottom: 15, 
        fontFamily:"RubikBubbles",
        color:"black"
    }
})