import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props =>{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop:1,
         // to cope for above status bar
        backgroundColor:'#f7287b',
        alignItems: 'center',
        justifyContent:'center'

    },
    title:{
        color:'white',
        fontSize:28,
    }
});

export default Header;