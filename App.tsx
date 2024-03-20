import React from 'react';
// import { SafeAreaView, ScrollView } from 'react-native';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{animation:"ios"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
