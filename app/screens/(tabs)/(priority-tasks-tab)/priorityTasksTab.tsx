import { View, Text ,Platform, ActivityIndicator} from 'react-native'
import ParentContainer from '../../../components/SafeAreaViewComponent'
import { FlatList } from 'react-native-gesture-handler'
import SingleTaskItem from '../../../components/SingleTaskItem'



import * as SQLite from "expo-sqlite"
import { useEffect, useState, useCallback } from 'react';



function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}
const db = openDatabase();



type resultType = {
  "done": number, 
  "id": number, 
  "priority": number, 
  "value": string
}

const priorityTasksTab = () => {

  const [data,setData] = useState<Array<resultType>>()

  function showData(){
    db.transaction(
      (tx) => {
        tx.executeSql('select * from tasks_table where priority=1', [], (trans, result) => {
          setData(result.rows._array)
          
        });
    },
      (error)=>{
        console.log(`error occurred ${error}`)
      },
      () =>{
        console.log(`success`);
      }
    );
  }

    useEffect( () => {
      
  
        showData()
    
    

  }, []);



  return (

    <ParentContainer >

    {data?.length?
    <FlatList

      data={data}
            renderItem={(item)=>{
              return <SingleTaskItem taskName={item.item.value} />
            }}
            keyExtractor={item => item.id.toString()}
    />
  :<ActivityIndicator size="large" color="#00ff00" />
  
  
  }
    </ParentContainer>
  )
}
export default priorityTasksTab