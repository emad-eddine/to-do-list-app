import { View, Text, Pressable, FlatList } from 'react-native';
import ParentContainer from '../../../components/SafeAreaViewComponent';
import { allTasksStyle } from './allTasksStyle';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../utils/constants';
import TaskItem from '../../../components/TaskItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    taskName: 'First Item',
    completed : false,
    priority : true
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5abb28ba',
    taskName: 'First Item First First First First First ',
    completed : false,
    priority : true
  },
  {
    id: 'bd7acbea-c1b1-46c2-ad5-3ad53abb28ba',
    taskName: 'First Item',
    completed : false,
    priority : true
  },
  {
    id: 'bd7acbea-c1b1-6c2-aed5-3ad53abb28ba',
    taskName: 'My task for today is to get started for my task ready to have beutiful day ',
    completed : false,
    priority : true
  },
  {
    id: 'bd7acbea-cb1-46c2-aed5-3ad53abb28ba',
    taskName: 'First Item',
    completed : false,
    priority : true
  },

];

type ItemProps = { title: string };

const allTasksTab = () => {



  return (
    <ParentContainer customStyle={allTasksStyle.parentContainer}>
      <View style={allTasksStyle.titleContainer}>
        <Text style={allTasksStyle.headerTitle}>Taskly</Text>
        <View style={allTasksStyle.headerStatusContainer}>
          <View style={allTasksStyle.headerStatus}>
            <Text style={allTasksStyle.headerStatusText}>3 Tasks</Text>
            <Text style={allTasksStyle.headerStatusText}>1 Top Priority</Text>
          </View>
          <Pressable style={allTasksStyle.addBtn}>
            <Ionicons
              name="md-add-outline"
              size={30}
              color={Colors.LIGHT_GREEN}
            />
          </Pressable>
        </View>
      </View>
      {/* Tasks Container */}

      <View style={allTasksStyle.tasksContainer}>
        <FlatList 
            style = {allTasksStyle.tasksListContainer}
            data={DATA}
            renderItem={({item}) => <TaskItem taskName={item.taskName} isTaskCompleted={item.completed} isTaskPriority = {item.priority} />}
            keyExtractor={item => item.id}
      /> 

        </View>

    
    </ParentContainer>
  );
};
export default allTasksTab;
