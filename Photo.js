import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const PrintPhoto = props => (
    <View>
        <Image source = {{uri:props.inputPhoto.url}} style = {styles.basePhoto}/>
    </View>
);

const styles = StyleSheet.create({
  basePhoto: {
    height: 300,
  },
});

export default PrintPhoto;