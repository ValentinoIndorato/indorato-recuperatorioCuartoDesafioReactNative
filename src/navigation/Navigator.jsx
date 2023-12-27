import Home from "../screens/Home";
import ListGoal from "../screens/ListGoal";
import ListToDo from "../screens/ListToDo"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "../Global/color";
import Header from "../component/Header";
import Wishlist from "../screens/Wishlist";
import WishDetail from "../component/WishDetail";
const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <>
        <NavigationContainer>
         <Stack.Navigator  screenOptions={{
       header:({navigation, route})=> <Header goBack={()=>navigation.goBack()} screen={route.name} />
      }}>
         <Stack.Screen name="Bienvenido" component={Home} />
         <Stack.Screen name="Tus tareas" component={ListToDo} />
         <Stack.Screen name="Tus metas" component={ListGoal} />
         <Stack.Screen name="Wishlist" component={Wishlist} />
         <Stack.Screen name="Wish" component={WishDetail} />

        </Stack.Navigator>
        </NavigationContainer>
         </>
    );
}
export default Navigator