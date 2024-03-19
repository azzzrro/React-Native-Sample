import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
// import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Home/> */}
        <Login/>
      </ScrollView>
    </SafeAreaView >
  );
}


export default App;
