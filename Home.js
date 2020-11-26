//React Native
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
//Third Party Modules
import moment from "moment"; //format date and get curr date
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';//detect swipe gestures
//Our Modules
import {PrintPhoto, PrintText} from "./Photo.js";
import { ScrollView } from 'react-native-gesture-handler';

const API = 'https://api.nasa.gov/planetary/apod?'
const KEY = 'api_key=JsDc3pN9hPNPG3QD4Yg9gl2yt3EaJlGi4iLe0GgA'
//nombre de requetes max de l'ordre de 10/20 sans api_key


class Home extends Component {
    state = {
        date: moment(),
        photo : ""
    }

    formatDate = moment => {
        let y = moment.year();
        let m = moment.month() + 1; /* 0 indexed months */
        let d = moment.date();
        return `${y}-${m}-${d}`;
    }

    setDate(moment) {
        this.setState({date: moment});
        //date changed => update photo
        this.getPhoto(this.formatDate(moment));
    }

    getDate() {
        return moment(this.state.date); //cloning the currDate
    }

    //query with date as input
    getPhoto = date => {
        fetch(API + `date=${date}&` + KEY)
            .then(response => response.json())
            .then(photoData => this.setState({ photo: photoData }))
            .catch((error) => {console.error(error);console.log("Probleme dans l'api call");} );
    }

    componentDidMount() {
        this.setDate(moment());
    }

    //finger go right to left on the screen
    swipeLeft() {
        let currDate = this.getDate();
        let newDate = moment.min(moment(), currDate.add(1,'days'));
        this.setDate(newDate);
    }

    //finger go left to right on the screen
    swipeRight() {
        let currDate = this.getDate();
        this.setDate(currDate.subtract(1,'days'));
    }

    mainApp() {
        return(
            <View style={{flex: 1,backgroundColor: '#D5CABD'}}>

                <PrintPhoto inputPhoto={this.state.photo} />
                <ScrollView>
                    <PrintText inputPhoto={this.state.photo} />
                </ScrollView>

                <View style={styles.buttonView}>
                    <TouchableOpacity style = {styles.sideButtons} onPressIn={() => this.swipeRight()}>
                        <Text style={{fontSize: 30}}>{'<'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.sideButtons} onPressIn={() => this.swipeLeft()}>
                        <Text style={{fontSize: 30}}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        const config = {
            velocityThreshold: 0.2,
            directionalOffsetThreshold: 80
        };
        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.swipeLeft()}
                onSwipeRight={(state) => this.swipeRight()}      // désactiver temporairement
                style={{flex:1}}
                config = {config}
                >
                {this.mainApp()}
            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
    },
    sideButtons: {
        justifyContent: 'center',
        height: 50,
    },
});

export default Home;