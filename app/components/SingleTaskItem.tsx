import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { allTasksStyle } from '../screens/(tabs)/(all-tasks-tab)/allTasksStyle'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../utils/constants';


interface Props{

    taskName : string

}


const SingleTaskItem:React.FC<Props> = ({taskName}) => {
   
  
  const [isFull,setFull] = useState<boolean>(false)

  return (
    <View style={allTasksStyle.taskContainer}>
         
          <Text numberOfLines={!isFull?1:99} style={allTasksStyle.taskTitle} onPress={()=>{setFull(!isFull)}}>
            {taskName}
          </Text>
        </View>
  )
}
export default SingleTaskItem