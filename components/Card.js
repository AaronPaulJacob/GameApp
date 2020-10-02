import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card= props =>{
return <View style={{...styles.card,...props.style}}>{props.children}</View>
};

export default Card;

const styles=StyleSheet({
    card:{
        // width:300,
        // maxWidth:'80%',
        // alignItems:'center',  // not necessary for every card to have these properties
        shadowColor:'black',
        shadowOffset:{ width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:8,
        padding:20,
        borderRadius:20,
    }
})