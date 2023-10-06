
import {StyleSheet} from "react-native"
import { Colors } from "../../utils/constants"



export const styles = StyleSheet.create({

    parentContainer : {
        backgroundColor : Colors.LIGHT_CYAN
    },

    headerTitleText : {
        fontFamily : "OS_MEDIUM",
        fontSize : 30,
        color : Colors.LIGHT_GREEN,
        width : "100%",
        textAlign :"center"
    },

    inputContainer:{
        flex:1,
        marginTop : 30,
        alignItems : "center"
    },

    inputStyle:{
        width:"80%",
        marginHorizontal : 40,
        paddingHorizontal : 10,
        paddingVertical : 15,
        borderRadius : 15,
        fontFamily : "OS_MEDIUM",
        fontSize  :20,
        borderColor : Colors.LIGHT_GREEN,
        borderWidth : 3,
        color : Colors.LIGHT_BLUE
    },

    priorityContainer:{
        flexDirection :"row",
        marginTop: 20,
        justifyContent : "center",
        alignItems : "center"
    },

    checkText:{
        fontFamily : "OS_MEDIUM",
        color: Colors.LIGHT_GREEN,
        fontSize : 20,
        marginLeft : 10
    },

    addBtn : {
        backgroundColor : Colors.LIGHT_GREEN,
        borderRadius : 50,
        height : 50,
        width : 50,
        justifyContent : "center",
        alignItems : "center",
        marginTop : 50
    }





})