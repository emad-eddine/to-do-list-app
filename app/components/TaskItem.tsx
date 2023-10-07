import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { allTasksStyle } from '../screens/(tabs)/(all-tasks-tab)/allTasksStyle';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../utils/constants';

interface Props {
  taskName: string;
  isTaskPriority: boolean;
  isTaskCompleted: boolean;
  onPriorityClicked: (value: boolean) => void;
  onCompleteClicked: (value: boolean) => void;
  onTaskLongClicked: () => void;
}

const TaskItem: React.FC<Props> = ({
  taskName,
  isTaskPriority,
  isTaskCompleted,
  onPriorityClicked,
  onCompleteClicked,
  onTaskLongClicked,
}) => {
  const [isCompleted, setCompleted] = useState<boolean>(isTaskCompleted);
  const [isPriority, setPriority] = useState<boolean>(isTaskPriority);
  const [isFull, setFull] = useState<boolean>(false);

  return (
    <View style={allTasksStyle.taskContainer}>
      <Ionicons
        style={allTasksStyle.iconStyle}
        name={isPriority ? 'star' : 'star-outline'}
        size={30}
        color={Colors.MEDIUM_YELLOW}
        onPress={() => {
          setPriority(!isPriority);
          onPriorityClicked(!isPriority);
        }}
      />
      <Text
        onLongPress={onTaskLongClicked}
        numberOfLines={!isFull ? 1 : 99}
        style={[
          allTasksStyle.taskTitle,
          {
              textDecorationLine: isCompleted?'line-through':"none",
              textDecorationStyle: "solid",
          },
        ]}
        onPress={() => {
          setFull(!isFull);
        }}
      >
        {taskName}
      </Text>
      <Checkbox
        style={allTasksStyle.checkBoxStyle}
        value={isCompleted}
        onValueChange={() => {
          setCompleted(!isCompleted);
          onCompleteClicked(!isCompleted);
        }}
        color={Colors.LIGHT_GREEN}
      />
    </View>
  );
};
export default TaskItem;
