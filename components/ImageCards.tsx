import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ImageCards() {
  return (
    <View>
      <Text style={styles.heading}>Image Cards</Text>
      <View>
        <Image source={{
            uri:"https://img.freepik.com/free-photo/people-enjoying-guarana-drink-outdoors_23-2150765636.jpg?w=1060&t=st=1710841795~exp=1710842395~hmac=4366946efa59f93a72ee181d46010b941225c52ac5c95c3f739cc494bc254469"
        }}
        style={styles.image}
        />
        <View>
          <TouchableOpacity onPress={()=> Linking.openURL("https://reactnavigation.org/docs/getting-started/")}>
          <Text style={styles.imageMore}>Click here to visit!</Text>
          </TouchableOpacity>
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
    image:{
        height:250,
        width:"auto",
        borderRadius:5,
        marginTop:5,
        marginHorizontal:5
    },
    imageMore:{
      fontSize:15,
      fontWeight:"700",
      marginLeft:5,
      marginTop:7,
      color:"green"
    }
})