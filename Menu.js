import React, { Component } from 'react';
import { Text, 
    View, FlatList, TouchableOpacity, 
    Image, SafeAreaView } from 'react-native';
import ic_menu from './img/list.png';
import ic_calendar from './img/calendar.png';
import ic_settings from './img/settings.png';
import DatePicker from 'react-native-datepicker';
import moment from "moment"; //format date and get curr date

import Drawer from 'react-native-drawer';
import Home from './Home.js';
console.disableYellowBox = true;    // hide warnings
//LogBox.ignoreAllLogs(disable);

export var username2 = ""

const menu = [
    { 'title': 'Accueil' },
    { 'title': 'Galerie' },
    { 'title': 'Tendances' },
    { 'title': 'Favoris' },
	{ 'title': 'Déconnexion' },
]

const headerHeight = 53;

export default class Menu extends Component {

    constructor(props) {
        super(props)
    }

    renderDrawer() {
        //SlideMenu
        return (
            <View style={styles.menuContainer}>
                <FlatList
                    data={menu}
                    extraData={this.state}
                    contentContainerStyle = {{flex:1, justifyContent:'center'}}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.menuTitleContainer} onPress={() => this.affichageSousMenu(item.title)}>
                                <Text style={styles.menuTitle}
                                    key={index}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>

                        )
                    }} />
                    
            </View>
        )
    }

    affichageSousMenu(title){
        switch (title) {
            case "Accueil":
                this.props.navigation.navigate('Menu')
                break;
            case "Galerie":
                this.props.navigation.navigate('Galerie')
                break;
            case "Tendances":
                this.props.navigation.navigate('Menu')
                break;
			case "Déconnexion":
                this.props.navigation.navigate('Login')
                break;
            default:
                this.props.navigation.navigate('Menu')
                break;
        }
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    render() {
        const username = this.props.route.params.username;
        username2 = username;
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='overlay'
                        tapToClose={true}
                        openDrawerOffset={0.35}
                        styles={drawerStyles}>
                        {/* //Main View */}
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Image style={{ tintColor: 'white' }} source={ic_menu} />
                                </TouchableOpacity>
                            </View>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={moment().format("DD-MM-YYYY")} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="20-06-1995"
                                maxDate={moment().format("DD-MM-YYYY")}
                                confirmBtnText="Confimer"
                                cancelBtnText="Annuler"
                                customStyles={{
                                    dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                }}
                                onDateChange={(date) => {
                                    this.child.setDate(moment(date,"DD-MM-YYYY"));
                                }}
                            />
                            <View style={styles.menuButton}>
                                <Text style={styles.username}>{username2}</Text>
                            </View>
                        </View>
                        {/*Application view*/}
                        <View style={styles.appContainer}>
                            <Home ref={ (child) => { this.child = child; }}/>
                        </View>
                    </Drawer>
                </View>
            </SafeAreaView>
        );
    }
}

const drawerStyles = {
    drawer: {
        flex: 1.0,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'transparent',
    },
    safeAreaStyle:  {
        flex: 1,     // pas très propre : le menu déroulant n'affiche qu'une rubrique
        backgroundColor: 'black',
    },
    headerContainer: {
        height: headerHeight,
        width : '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position : 'absolute',
        //justifyContect: 'center',
        backgroundColor: 'rgb(52, 52, 52)',
    },
    menuButton: {
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
    },
    menuContainer: {
        flex: 1.0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    menuTitleContainer: {
        alignItem:'center',
        height: 60,
        width:'100%',
        flexDirection:'row',
        marginVertical : 10,
    },
    menuTitle: {
        width:'100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        alignSelf:'center',
    },
    appContainer: {
        top: headerHeight,
        flex: 1,
    },
    username: {
        fontSize: 18,
        color: 'white',
    },
    datePickerStyle: {
        width: 200,
        marginTop: 7,
    }
}