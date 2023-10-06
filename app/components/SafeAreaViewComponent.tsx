
import { SafeAreaView ,StyleSheet, Platform, StatusBar} from 'react-native'
import React, { ReactNode } from 'react';
import { Colors } from '../utils/constants';


interface Props{
    children:ReactNode,
    customStyle?:{}
}



const ParentContainer:React.FC<Props> = ({children,customStyle}) => {
  return (
    <SafeAreaView style={[parentContainerStyle.AndroidSafeArea,customStyle]}>
        {children}
    </SafeAreaView>
  )

}


const parentContainerStyle =  StyleSheet.create({
    AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   

}

})



export default ParentContainer