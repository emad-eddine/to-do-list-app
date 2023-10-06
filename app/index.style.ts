import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors } from "./utils/constants";



export const indexStyle =  StyleSheet.create({
    LandingContainer: {
    backgroundColor: Colors.LIGHT_CYAN,
    justifyContent:"center",
    alignItems:"center"

},

    TitleContainer:{
        flex:  1,
        width : "100%",
        justifyContent:"center",
        alignItems :"center"
    },

    Title :{
        fontFamily : "OS_BOLD",
        fontSize : 45,
        color : "black"
    },

    ImageStyle:{
        flex :3,
        resizeMode:"contain"
    },

    ContentText:{
        fontFamily : "OS_REGULAR",
        fontSize : 30,
        color : "black",
        paddingLeft : 16,
        paddingRight : 16
    },

    ToHomeBtn:{
        backgroundColor : Colors.LIGHT_GREEN,
        borderRadius : 50,
        padding : 20,
        marginBottom : 20
    }
    

})