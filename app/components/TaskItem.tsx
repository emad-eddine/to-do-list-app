

import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { allTasksStyle } from '../screens/(tabs)/(all-tasks-tab)/allTasksStyle'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../utils/constants';


interface Props{

    taskName : string,
    isTaskPriority : boolean,
    isTaskCompleted : boolean

}



const TaskItem:React.FC<Props> = ({taskName,isTaskPriority,isTaskCompleted}) => {

      
  const [isCompleted, setCompleted] = useState<boolean>(isTaskCompleted);
  const [isPriority,setPriority] = useState<boolean>(isTaskPriority)
  const [isFull,setFull] = useState<boolean>(false)

  return (
    <View style={allTasksStyle.taskContainer}>
          <Ionicons
            style={allTasksStyle.iconStyle}
            name={isPriority?"star":"star-outline"}
            size={30}
            color={Colors.MEDIUM_YELLOW}
            onPress={()=>{setPriority(!isPriority)}}
          />
          <Text numberOfLines={!isFull?1:99} style={allTasksStyle.taskTitle} onPress={()=>{setFull(!isFull)}}>
            {taskName}
          </Text>
          <Checkbox
            style={allTasksStyle.checkBoxStyle}
            value={isCompleted}
            onValueChange={setCompleted}
            color={Colors.LIGHT_GREEN}
          />
        </View>
  )
}
export default TaskItem