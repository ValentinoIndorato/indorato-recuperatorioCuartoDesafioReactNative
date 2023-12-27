import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";

function ListGoal({navigation, route}) {
  console.log(route)
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
       
        {/*<Pressable onPress={()=> {setChangeScreen("home")}}>
          <Text>volver</Text>
          </Pressable>*/}
        </View>
      </View>
    </>
  );
}
export default ListGoal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    
  },
   header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",    
    gap: 10,
  },
  h1: {
    fontSize: 50,
    marginBottom: 15, 
    fontFamily:"RubikBubbles"
  },
 
});