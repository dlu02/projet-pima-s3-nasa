import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import not_found from './img/not-found.jpg'

const PrintPhoto = props => (
    <View>
        { props.inputPhoto.media_type == "image" 
            ?
            <Image source = {{uri:props.inputPhoto.url}} style = {styles.basePhoto}/>
            :
            <View style = {{alignItems: 'center'}}>
                <Image source = {not_found} style = {{height: 300, aspectRatio : 3/2}}/>
            </View>
        }
    </View>

);

const PrintText = props => (
    <ScrollView>
        <View style = {styles.titleView}>
            <Text style = {styles.titleText}>{props.inputPhoto.title}</Text>
            <Text style = {styles.dateText}>{props.inputPhoto.date}</Text>
        </View>
        <View style = {styles.descView}>
            <Text style = {styles.baseText}>{props.inputPhoto.explanation}</Text>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    basePhoto: {
        height: 300,
    },
    replacementText: {
        fontSize: 30,
        textAlign: 'center',
    },
    baseText: {
        fontFamily: 'normal', //to change i think
        fontSize: 20,
        textAlign: 'justify',
    },
    titleText: {
        fontFamily: 'normal', //to change i think
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dateText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#666',
    },
    descView: {
        margin: 30,
    },
    titleView: {
        marginTop: 30,
    },
});

export {
    PrintPhoto,
    PrintText,
}
