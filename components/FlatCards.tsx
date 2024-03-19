import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Cards</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Three</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.text}>Four</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    fontWeight:"700",
    marginLeft:5,
    marginTop:10
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "white"
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5
  },
  cardOne: {
    backgroundColor: "red"
  },
  cardTwo: {
    backgroundColor: "green"
  },
  cardThree: {
    backgroundColor: "cyan"
  },
  cardFour: {
    backgroundColor: "magenta"
  }
})