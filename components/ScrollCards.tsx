import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
    return (
        <View>
            <Text style={styles.heading}>Scroll Cards</Text>
            <ScrollView horizontal={true} style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.text}>One</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>One</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>One</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>One</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        marginLeft:5,
        fontWeight:"700",
        marginTop:10
    },
    text:{
        color:"white"
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        borderRadius: 5,
        backgroundColor: "gray",
        elevation:2,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowColor:'#333',
        shadowOpacity:0.2,
        shadowRadius:4,
    },
})