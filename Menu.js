import React, { Component } from 'react';
import { Text, 
    View, FlatList, TouchableOpacity, 
    Image, SafeAreaView } from 'react-native';
import ic_menu from './img/list.png'
import Drawer from 'react-native-drawer'
console.disableYellowBox = true;    // hide warnings
//LogBox.ignoreAllLogs(disable);

const menu = [
    { 'title': 'Accueil' },
    { 'title': 'Galerie' },
    { 'title': 'Tendances' },
    { 'title': 'Favoris' },
]

export default class Menu extends Component {

    constructor(props) {
        super(props)
    }

    renderDrawer() {
        //SlideMenu
        return (
            <View style={styles.menuContainer}>
                <FlatList
                    style={{ flex: 1.0 }}
                    data={menu}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.menuTitleContainer}>
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

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='static'
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
                            <View style={styles.menuButton} />
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
        backgroundColor: 'black',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'white',
    },
    safeAreaStyle:  {
        flex: 0.08,     // pas très propre : le menu déroulant n'affiche qu'une rubrique
        backgroundColor: 'black',
    },
    headerContainer: {
        height: 53,
        width : '100%',
        flexDirection: 'row',
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
    },
    menuTitle: {
        width:'100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        alignSelf:'center',
    }
}