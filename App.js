import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import PrintPhoto from "./Photo.js";

const API = 'https://api.nasa.gov/planetary/apod?'
const KEY = 'api_key=JsDc3pN9hPNPG3QD4Yg9gl2yt3EaJlGi4iLe0GgA'
//nombre de requetes max de l'ordre de 10/20 sans api_key

const PrintTitle = props => (
    <View style = {styles.titleView}>
        <Text style = {styles.titleText}>{props.inputPhoto.title}</Text>
        <Text style = {styles.dateText}>{props.inputPhoto.date}</Text>
    </View>
);

const PrintDesc = props => (
    <View style = {styles.descView}>
        <Text style = {styles.baseText}>{props.inputPhoto.explanation}</Text>
    </View>
);

class App extends Component {

    //attributes
    state = {
        photo : ""
    };

    //query with date as input
    //to use when date input will be supported
    /*getPhoto = date => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
            .then(response => response.json())
            .then(photoData => this.setState({ photo: photoData }))
            .catch((error) => {console.error(error);} );
    };*/

    //run when Component is mounted in the app tree (start in Unity)
    componentDidMount() {
        fetch(API + /*add query here*/"" + KEY)
            .then((response) => response.json() )
            .then((photoData) => this.setState({ photo: photoData }))
            .catch((error) => {console.error(error);} );
    };

    //Update in Unity
    render() {
        return (
            <View style={{flex: 1}}>
                <PrintPhoto inputPhoto={this.state.photo} />
                <ScrollView>
                    <PrintTitle inputPhoto={this.state.photo} />
                    <PrintDesc inputPhoto={this.state.photo} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

export default App;
