import { View, Text, TextInput, Pressable,Platform } from 'react-native';
import ParentContainer from '../../components/SafeAreaViewComponent';
import { styles } from './addTask.style';
import { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Colors } from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';


import * as SQLite from "expo-sqlite"

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

export default function addTask() {
  const [text, onChangeText] = useState<string>("");
  const [isChecked,setChecked] = useState<boolean>(false);


  useEffect(() => {

    
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tasks (id integer primary key not null,value text,done boolean,priority boolean);"
      );
    });
  }, []);


  function addItemToDb(task:string,isPriority:boolean):boolean{

    if (task === "") {
      return false;
    }

    const urgent = isPriority?1:0

    db.transaction(
      (tx) => {
        tx.executeSql("insert into tasks (value,done,priority) values (?, 0,?)", [task,urgent]);
    },
      (error)=>{
        console.log(`error occurred ${error}`)
        return false
      },
      () =>{
        console.log(`${task} added successfully with priority ${urgent}`);
        return true
      }
    );

    return true


}

  function showData(){
    db.transaction(
      (tx) => {
        tx.executeSql('select * from tasks', [], (trans, result) => {
          console.log(result.rows._array[2])
        });
    },
      (error)=>{
        console.log(`error occurred ${error}`)
        return false
      },
      () =>{
        console.log(`success`);
        return true
      }
    );
  }

  return (
    <ParentContainer customStyle={styles.parentContainer}>
      <Text style={styles.headerTitleText}>What on Your Mind!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          blurOnSubmit
          placeholder="Your Task"
          style={styles.inputStyle}
          onChangeText={onChangeText}
          value={text}
        />
        <View style={styles.priorityContainer}>
            <Checkbox color={Colors.LIGHT_GREEN} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.checkText}>Is it Top Priority</Text>
        </View>

        <Pressable style={styles.addBtn} onPress={()=>{addItemToDb(text,isChecked)}}>
            <Ionicons
              name="md-add-outline"
              size={30}
              color={Colors.LIGHT_CYAN}
            />
          </Pressable>


          <Pressable style={styles.addBtn} onPress={()=>{showData()}} >
            <Text>Show</Text>
          </Pressable>
      </View>
    </ParentContainer>
  );
}
