import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/color'
import Corin from '../constants/color2';
import Input from '../components/Input';
import NumContainer from '../components/NumberContainer'
const StartGameScreen = props => {
    //console.log(Colors);
    //console.log(Corin);
    const [val, setVal] = useState('');
    const [isConfirm, setisConfirm] = useState(false);
    const [num, setnum] = useState()
    const myInputHandler = (inputText) => {
        setVal(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setVal('');
        setisConfirm(false);
        //console.log("reaching the reset button handler")
    }
    const confirmInputHandler = () => {
        const chosenNum = parseInt(val);
        // console.log("reached");
        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }

        setisConfirm(true);
        setVal('');
        setnum(parseInt(val));
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (isConfirm) {
        // console.log("yes it is conformed");
        confirmedOutput = <Card style={styles.summaryContainer}>
                                <Text>You selected </Text>
                                <NumContainer>{num}</NumContainer>
                                <Button title="Start Game" />
                            </Card>
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss() }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}> Start a new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={2}
                        value={val}
                        onChangeText={myInputHandler} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>)
}
export default StartGameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        //flex:1,
        width: '100%',  // 100% width of parent View
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:'center'
    }
})