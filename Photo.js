import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    basePhoto: {
        height: 300,
    },
    replacementText: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default PrintPhoto;
