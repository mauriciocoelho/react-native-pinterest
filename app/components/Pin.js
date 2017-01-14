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
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
