import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../config/Resturant/colors';
import SPACING from '../config/Resturant/spacing';
SPACING;
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/pexels-william-choquette-2641886.jpeg')}>
      <View style={{flex: 1, backgroundColor: colors.black, opacity: 0.2}} />
      <View
        style={{
          //   backgroundColor: colors.white,
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: 2,
          justifyContent: 'flex-end',
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '30%',
          }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: '800',
              fontSize: SPACING * 4,
              textTransform: 'capitalize',
            }}>
            Let your favorite food find you
          </Text>
          <Text
            style={{
              color: colors.white,
              fontWeight: '600',
              fontSize: SPACING * 1.5,
            }}>
            Foods are so delicious to eat
          </Text>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: '700',
              }}>
              Explore Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
