import React from 'react';
import {Text, View} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
WelcomeScreen;
HomeScreen;
const App = () => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen />
    </View>
  );
};
export default App;
