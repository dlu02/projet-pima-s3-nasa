import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  ToastAndroid } from 'react-native';

const API = 'https://perso.dlu02.ovh/pima_S3/login.php?'
//API php

export default class Login extends React.Component {
  state={
    username:"",
    password:"",
    error_code:""
  }

  login = () => {
    fetch(API + `pseudo=${this.state.username}&`+`mdp=${this.state.password}`) 
        .then(response => response.json())
        .then(responsejson => { return this.redirection(responsejson.code_retour)})
        .catch((error) => {console.error(error);console.log("Probleme dans l'api call");} );
  }

  redirection = (code_retour: string) => {
    if (code_retour === "S2"){
      ToastAndroid.show("Succès !", ToastAndroid.SHORT);
      this.props.navigation.navigate('Menu',{username: this.state.username})
    }
    else {
      ToastAndroid.show("Echec ! Identifiants incorrects", ToastAndroid.SHORT);
    }
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
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de passe" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() =>
              this.login()}>
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginTextMargin}
            onPress={() =>
              this.props.navigation.navigate('Signin')
            }>
          <Text style={styles.loginText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginTextMargin} 
            onPress={() =>
              this.props.navigation.navigate('Menu',{username: ""})
            }>
          <Text style={styles.loginText}>Continuer sans se connecter</Text>
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
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },

  loginTextMargin:{
    marginTop:15
  }
});
