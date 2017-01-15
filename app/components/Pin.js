import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {
    Back,
    Heart,
    More,
    PinIcon,
    Share
} from '../util/icons'


export default class componentName extends Component {
    render() {
        return (
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                        <Back />
                        <Heart />
                        <Share />
                        <More />
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <View style={styles.PinButton}>
                            <PinIcon />
                            <Text style={styles.PinButtonText}>Save</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.PinContent}>
                    <Text style={styles.ImagePlaceholder}>Placeholder</Text>
                </View>

                <View style={styles.PinMeta}>
                    <View style={styles.PinMetaTextContainer}>
                        <Text style={styles.PinMetaText}>Saved from</Text>
                        <Text style={styles.PinMetaText}>website.com</Text>
                    </View>

                    <View style={styles.PinButtonContainer}>
                        <View style={styles.PinButton}>
                            <Text style={styles.PinButtonText}>Visit</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.PinUser}>
                    <View style={styles.PinUserAvatar}>
                        <Text>placeholder</Text>
                    </View>
                    <View style={styles.PinUserContainer}>
                        <Text style={styles.PinUserText}>
                            <Text style={styles.TextBold}>User Name </Text>saved to<Text style={styles.TextBold}> Space</Text>
                        </Text>
                        <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    PinContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#cecece'
    },
    PinHeader: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 8
    },
    UtilityNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PinButton: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 6,
        justifyContent: 'space-between',
        width: 60
    },
    PinButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    PinButtonText: {
        color: 'white'
    },
    PinContent: {
        backgroundColor: '#c9c9c9',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
        paddingLeft: 8 
    },
    ImagePlaceholder: {
        backgroundColor: '#c9c9c9',        
    }, 
    PinMeta: {
        flex: 1,
        backgroundColor: 'white'
    },
    PinUser: {
        flex: 5
    }
})
