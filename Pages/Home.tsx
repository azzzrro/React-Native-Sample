import { ScrollView, View } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ScrollCards from '../components/ScrollCards'
import ImageCards from '../components/ImageCards'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ScrollCards />
          <ImageCards />
        </View>
      </ScrollView >
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({})