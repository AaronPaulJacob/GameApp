import React from 'react';
import { View,Text,StyleSheet ,TextInput,Button} from 'react-native';

const StartGameScreen= props =>{
    return (
    <View style={styles.screen}>
        <Text style={styles.title}> Start a new Game</Text>
        <View style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <Button title="Reset" onPress={()=>{}} />
                <Button title="Confirm" onPress={()=>{}} />
            </View>
        </View>
    </View>)
}
export default StartGameScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    title:{
        fontSize:20,
        marginVertical:10,

    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{ width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:8,
        padding:20,
        borderRadius:20,
    },
    buttonContainer:{
        flexDirection:'row',
        //flex:1,
        width:'100%',  // 100% width of parent View
        justifyContent:'space-between',
        paddingHorizontal:15,
    }
})