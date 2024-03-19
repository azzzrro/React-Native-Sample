import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App;
