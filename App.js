import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import PrintPhoto from "./Photo.js";

const API = 'https://api.nasa.gov/planetary/apod?'
const KEY = 'api_key=DEMO_KEY'

const PrintTitle = props => (
    <View>
        <Text style = {styles.titleText}>{props.inputPhoto.title}</Text>
    </View>
);

const PrintDesc = props => (
    <View>
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
            <View>
                <PrintTitle inputPhoto={this.state.photo} />
                <PrintPhoto inputPhoto={this.state.photo} />
                <PrintDesc inputPhoto={this.state.photo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'normal', //to change i think
    },
    titleText: {
        fontFamily: 'normal', //to change i think
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default App;