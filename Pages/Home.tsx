import { StyleSheet, View } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ScrollCards from '../components/ScrollCards'
import ImageCards from '../components/ImageCards'

export default function Home() {
  return (
    <View>
      <FlatCards/>
      <ScrollCards/>
      <ImageCards/>
    </View>
  )
}

const styles = StyleSheet.create({})