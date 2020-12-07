import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ToastAndroid } from 'react-native';

const API = 'https://perso.dlu02.ovh/pima_S3/request.php?'
//API php

export default class Signin extends React.Component {
  state={
    username:"",
    password:"",
    error_code:""
  }

  request = () => {
    fetch(API + `pseudo=${this.state.username}&`+`mdp=${this.state.password}`) 
        .then(response => response.json())
        .then(responsejson => { return this.redirection(responsejson.code_retour)})
        .catch((error) => {console.error(error);console.log("Probleme dans l'api call");} );
  }

  redirection = (code_retour: string) => {
    if (code_retour === "S1"){
      ToastAndroid.show("Succès ! Vous allez être redirigés vers la page de connexion.", ToastAndroid.SHORT);
      this.props.navigation.navigate('Login')
    }
    else {
      ToastAndroid.show("Echec ! Identifiants déjà utilisés", ToastAndroid.SHORT);
    }
  }

  handleUsernameChange = (usn: string) => {
    this.setState({username: usn})
  }

  handlePasswordChange = (pwd: string) => {
    this.setState({password: pwd})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>NASA App</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nom d'utilisateur" 
            placeholderTextColor="#003f5c"
            onChangeText={this.handleUsernameChange}
            value={this.state.username}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de passe" 
            placeholderTextColor="#003f5c"
            onChangeText={this.handlePasswordChange}
            value={this.state.password}/>
        </View>
        <Button style={styles.signinBtn} onPress={this.request} title="Inscription">
        </Button>
        <TouchableOpacity style={styles.signinTextMargin} 
            onPress={() =>
              this.props.navigation.navigate('Login')
            }>  
          <Text style={styles.signinText}>Retour à la page de connexion</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  signinBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  signinText:{
    color:"white"
  },
  signinTextMargin:{
    marginTop:15
  }
});
