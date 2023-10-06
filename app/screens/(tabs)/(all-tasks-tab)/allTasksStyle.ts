import {StyleSheet} from "react-native"
import { Colors } from "../../../utils/constants"



export const allTasksStyle = StyleSheet.create({

    parentContainer : {
        backgroundColor : Colors.LIGHT_GREEN
    },

    titleContainer : {
        flex : 1,
        zIndex: -99,
    },

    tasksContainer : {
        backgroundColor : Colors.LIGHT_CYAN,
        flex : 3,
        borderTopStartRadius : 50,
        borderTopEndRadius : 50,
        zIndex : 99,
        padding : 20,
        alignItems : "center",
    },

    headerTitle : {
        fontFamily : "OS_BOLD",
        color : Colors.LIGHT_CYAN,
        fontSize : 40,
        marginLeft : 30,
        flex :1
    },

    headerStatusContainer:{
        flex : 1,
        flexDirection : "row",
        marginLeft : 20,
        marginRight: 30
    },


    headerStatus: {
        flex : 5,
        flexDirection: "row"
    },

    headerStatusText : {
        fontFamily : "OS_REGULAR",
        fontSize : 20,
        color : Colors.LIGHT_CYAN,
        marginLeft : 10
    },

    addBtn : {
        backgroundColor : Colors.LIGHT_CYAN,
        borderRadius : 50,
        height : 50,
        width : 50,
        justifyContent : "center",
        alignItems : "center"
    },

    tasksListContainer:{
        borderTopStartRadius : 50,
        borderTopEndRadius : 50,
        width : "100%"
    },

    taskContainer: {
        width : "95%",
        flexDirection :"row",
        justifyContent : "center",
        alignItems : "center",
        marginHorizontal : 30,
        borderColor : Colors.LIGHT_GREEN,
        borderWidth : 2,
        borderRadius : 25,
        paddingHorizontal : 20,
        marginVertical : 20,
        marginLeft : 15,
        marginRight : 15 
    },

    taskTitle :{
        flex : 5,
        fontFamily : "OS_BOLD",
        fontSize: 20,
        textAlign : "left",
        padding : 15,
        textTransform : "capitalize"
    },

    iconStyle : {
       flex : 1,
        aspectRatio : 1
    },

    checkBoxStyle :{
        flex : 0.3,
        aspectRatio : 1
    }









})