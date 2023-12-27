import { useFonts } from "expo-font";
import Navigator from "./src/navigation/Navigator";
import { StatusBar } from "expo-status-bar";

 

export default function App() {
 const [fontLoaded] =useFonts({RubikBubbles:require("./src/assets/RubikBubbles-Regular.ttf")})
  
  if(!fontLoaded) return null


  return (
    <>
    <StatusBar style="auto" />
      <Navigator/>
    </>
  );
}
 