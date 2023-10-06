import {View,Text,SafeAreaView,Image, Pressable} from "react-native"
import { indexStyle } from "./index.style"
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "./utils/constants";
import {useRouter} from "expo-router"
import ParentContainer from "./components/SafeAreaViewComponent";
const index = () => {

  const router = useRouter()
  
  return (
    <ParentContainer customStyle={indexStyle.LandingContainer}>
  
        <View style={indexStyle.TitleContainer}>
            <Text style={indexStyle.Title}>Hi There!</Text>
        </View>
        <Image source={require('./assets/icons/app_icon.png')} style={indexStyle.ImageStyle} />
        <View style={indexStyle.TitleContainer}>
            <Text style={indexStyle.ContentText}>Easy way to manage Your Tasks!</Text>
        </View>


       <Pressable style={indexStyle.ToHomeBtn} onPress={()=>{router.replace("/screens/(tabs)/(all-tasks-tab)/allTasksTab")}}>
            <Ionicons name="arrow-forward" color={Colors.LIGHT_CYAN} size={40}/>
       </Pressable>
    
  
    </ParentContainer>
  )
}





export default index