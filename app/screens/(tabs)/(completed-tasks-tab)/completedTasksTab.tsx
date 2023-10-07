import { View, Text, FlatList, ActivityIndicator, Platform } from 'react-native'
import ParentContainer from '../../../components/SafeAreaViewComponent'
import SingleTaskItem from '../../../components/SingleTaskItem'
import { useIsFocused } from "@react-navigation/core";


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


const completedTasksTab = () => {
  const [data,setData] = useState<Array<resultType>>()

  function showData(){
    db.transaction(
      (tx) => {
        tx.executeSql('select * from tasks_table where done=1', [], (trans, result) => {
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

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
       showData()
    }
  }, [isFocused]);

  


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
export default completedTasksTab