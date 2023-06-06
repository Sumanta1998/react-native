import React from 'react';
import {Text, View} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import RecipeDetailScreen from './Screens/RecipeDetailScreen';
import DATA from './config/Resturant/DATA';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RecipeDetailScreen recipe={DATA[0].recipes[1]} />
    </View>
  );
};
export default App;
