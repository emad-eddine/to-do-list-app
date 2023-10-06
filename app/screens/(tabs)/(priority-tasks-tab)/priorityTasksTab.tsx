import { View, Text } from 'react-native'
import ParentContainer from '../../../components/SafeAreaViewComponent'
import { FlatList } from 'react-native-gesture-handler'
import SingleTaskItem from '../../../components/SingleTaskItem'


const data = [
  {
    id : "1",
    task : "welcome"
  },
  {
    id : "2",
    task : "welcome "
  },

  {
    id : "3",
    task : "welcome"
  },
  {
    id : "4",
    task : "welcome"
  }

]

const priorityTasksTab = () => {
  return (

    <ParentContainer >
    <FlatList

      data = {data}
      renderItem={({item})=>{
        return <SingleTaskItem taskName={item.task} />
      }}
      keyExtractor={(item)=>item.id}
    />
    </ParentContainer>
  )
}
export default priorityTasksTab