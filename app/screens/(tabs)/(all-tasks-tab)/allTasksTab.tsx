import {
  View,
  Text,
  Pressable,
  FlatList,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import ParentContainer from '../../../components/SafeAreaViewComponent';
import { allTasksStyle } from './allTasksStyle';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../utils/constants';
import TaskItem from '../../../components/TaskItem';
import { Link, useRouter } from 'expo-router';

import * as SQLite from 'expo-sqlite';
import { useEffect, useState, useCallback } from 'react';
import { useIsFocused } from "@react-navigation/core";
function openDatabase() {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase('db.db');
  return db;
}
const db = openDatabase();

type resultType = {
  done: number;
  id: number;
  priority: number;
  value: string;
};

const allTasksTab = () => {
  const router = useRouter();
  const [data, setData] = useState<Array<resultType>>();
  const [priorityTasks, setPriorityTasks] = useState(0);

  

  function showData() {
    db.transaction(
      (tx) => {
        tx.executeSql('select * from tasks_table', [], (trans, result) => {
          setData(result.rows._array);
          //console.log(result.rows._array);
          
        });
      },
      (error) => {
        console.log(`error occurred ${error}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }

  function removeAllData() {
    db.transaction(
      (tx) => {
        tx.executeSql('delete from tasks_table', [], (trans, result) => {
          setData([]);
        });
      },
      (error) => {
        console.log(`error occurred ${error}`);
        return false;
      },
      () => {
        console.log(`success`);
        return true;
      }
    );
  }

  function getTopPriority() {
    if (data?.length) {
      const top: Array<resultType> = data.filter((item) => {
        return item.priority == 1;
      });
      console.log(`tp length ${top} and ${top.length}`);

      setPriorityTasks(top.length);
    }
  }

  function updateTaskPriority(isPriority: boolean, id: number) {
    const prior = isPriority ? 1 : 0;

    db.transaction(
      (tx) => {
        tx.executeSql(
         `UPDATE tasks_table SET priority = (?) WHERE id = (?)`, [prior, id]
        );
      },
      (error) => {
        console.log(`error occurred ${error}`);
        return false;
      },
      () => {
        console.log(`Updated success`);
        showData()
        return true;  
      }
    );
  }

  function updateTaskCompleted(isComplete: boolean, id: number) {
    const completed = isComplete ? 1 : 0;

    db.transaction(
      (tx) => {
        tx.executeSql(
          `update tasks_table set done=(?) where id=(?)`,
          [completed,id]
        );
      },
      (error) => {
        console.log(`error occurred ${error}`);
        return false;
      }, 
      () => {
        console.log(`Updated compleyed success`);
        showData()
        return true;
      }
    );
  }

   const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
     
    if(!data){
showData();
    }
    if(data){
getTopPriority();
    }
    
    

   
    }
  }, [isFocused,data]);

   function removeTask(id: number) {
   

    db.transaction(
      (tx) => {
        tx.executeSql(
          `Delete from tasks_table where id=(?)`,
          [id]
        );
      },
      (error) => {
        console.log(`error occurred ${error}`);
        return false;
      }, 
      () => {
        console.log(`delete compleyed success`);
        showData()
        return true;
      }
    );
  }


  const createTwoButtonAlert = (id:number) =>
    Alert.alert('Delete', 'Delete this task', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        removeTask(id)
      }},
    ]);

  return (
    <ParentContainer customStyle={allTasksStyle.parentContainer}>
      <View style={allTasksStyle.titleContainer}>
        <Text style={allTasksStyle.headerTitle}>Taskly</Text>
        <View style={allTasksStyle.headerStatusContainer}>
          <View style={allTasksStyle.headerStatus}>
            <Text style={allTasksStyle.headerStatusText}>
              {data?.length} Tasks
            </Text>
            <Text style={allTasksStyle.headerStatusText}>
              {priorityTasks} Top Priority
            </Text>
          </View>
          <Pressable
            style={allTasksStyle.addBtn}
            onPress={() => {
              router.push('/screens/add-task/addTask');
            }}
          >
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
        {data?.length ? (
          <FlatList
            style={allTasksStyle.tasksListContainer}
            data={data}
            renderItem={(item) => {
              return (
                <TaskItem
                  taskName={item.item.value}
                  isTaskCompleted={item.item.done ? true : false}
                  isTaskPriority={item.item.priority ? true : false}
                  onPriorityClicked={(value)=>{

                    updateTaskPriority(value,item.item.id)
                  }}  
                  onCompleteClicked={(value)=>{
                    console.log(value);
                    
                    updateTaskCompleted(value,item.item.id)
                  }}  

                  onTaskLongClicked={()=>{
                    createTwoButtonAlert(item.item.id)
                  }}
                   
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </ParentContainer>
  );
};
export default allTasksTab;
