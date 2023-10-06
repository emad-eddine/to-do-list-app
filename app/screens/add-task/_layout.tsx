
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import { Colors } from '../../utils/constants'
export default function Layout() {
  return (

    <Stack>
      <Stack.Screen name='addTask' options={
        {
          headerTitle : "Add Task",
          headerStyle :{
            backgroundColor : Colors.LIGHT_GREEN
          },
          headerTitleStyle : {
            fontFamily : "OS_BOLD",
            fontSize : 30,
            color: Colors.LIGHT_CYAN
          },
          headerTintColor : Colors.LIGHT_CYAN
        }
      } />

    </Stack>
  )
}