import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

//une horreur, il y a (rarement) des APOD qui ne sont pas des images.
const PrintPhoto = props => (
    <View>
        { props.inputPhoto.media_type == "image" 
            ?
            <Image source = {{uri:props.inputPhoto.url}} style = {styles.basePhoto}/>
            :
            <View style = {styles.basePhoto}>
              <Text style = {styles.replacementText}>{`Media is not an Image.\n Link : \n ${props.inputPhoto.url}`}</Text>
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
