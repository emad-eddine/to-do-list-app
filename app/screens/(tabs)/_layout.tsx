import {Tabs} from "expo-router"
import { Colors } from "../../utils/constants"
import { Ionicons } from '@expo/vector-icons';

function Layout(){

    return(
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: Colors.LIGHT_GREEN,
                height : 60
            },
            tabBarLabelStyle:{
                fontFamily : "OS_MEDIUM",
                color : Colors.LIGHT_CYAN,
                fontSize : 16
            },
            tabBarAllowFontScaling: true,
            tabBarActiveBackgroundColor : Colors.LIGHT_BLUE,
            headerStyle : {
                    backgroundColor : Colors.LIGHT_GREEN,
                },
                headerTitleStyle :{
                    fontFamily :"OS_BOLD",
                    fontSize : 30,
                    color : Colors.LIGHT_CYAN,
                    paddingBottom : 20
                }
        
        }} >

            <Tabs.Screen name="(all-tasks-tab)/allTasksTab"
            
            options={{
                tabBarLabel : "All Tasks",
                tabBarIcon :({size})=>{
                    return <Ionicons name="pencil" size={size} color={Colors.LIGHT_CYAN} />
                },
                headerShown : false
            }}
            
            />


            <Tabs.Screen name="(priority-tasks-tab)/priorityTasksTab"
            
            options={{
                tabBarLabel : "Priority",
                tabBarIcon :({size})=>{
                    return <Ionicons name="star-outline" size={size} color={Colors.LIGHT_CYAN} />
                },
                headerTitle : "Top Priority Tasks",
                
         
            }}
            
            />
            
            <Tabs.Screen name="(completed-tasks-tab)/completedTasksTab"
            
            options={{
                tabBarLabel : "Completed",
                tabBarIcon :({size})=>{
                    return <Ionicons name="md-checkmark" size={size} color={Colors.LIGHT_CYAN} />
                },
                headerTitle : "Completed Tasks",
                
                
            }}
            
            />

            


        </Tabs>


    )


}


export default Layout