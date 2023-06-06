import {
  Dimensions,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SPACING from '../config/Resturant/spacing';
import colors from '../config/Resturant/colors';
import {Icon} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
const {height} = Dimensions.get('window');
const RecipeDetailScreen = ({recipe}) => {
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: height / 2.5,
              paddingTop: SPACING * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={recipe.image}>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                borderRadius: SPACING * 2.5,
              }}>
              <Icon
                name="arrow-back"
                type="ionicon"
                color={colors.gray}
                size={SPACING * 2.5}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                borderRadius: SPACING * 2.5,
              }}>
              <Icon
                name="share"
                type="ionicon"
                color={colors.gray}
                size={SPACING * 2.5}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '70%'}}>
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    color: colors.black,
                    fontWeight: '700',
                  }}>
                  {recipe.name}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 3,
                  backgroundColor: colors.yellow,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: SPACING,
                }}>
                <Icon
                  name="star"
                  type="ionicon"
                  color={colors.black}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.black,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                  }}>
                  {recipe.rating}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SPACING,
              }}>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 1.5,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="time"
                  type="ionicon"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                  }}>
                  {recipe.time}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 1.5,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="bicycle"
                  type="ionicon"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                  }}>
                  {recipe.del_time}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 1.5,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="restaurant-outline"
                  type="ionicon"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                  }}>
                  {recipe.cooking_time}
                </Text>
              </View>
            </View>
            <View style={{marginVertical: SPACING}}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: '700',
                  color: colors.dark,
                }}>
                Ingredients
              </Text>
              {recipe.ingredients.map(el => (
                <View
                  style={{
                    marginVertical: SPACING,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  key={el.id}>
                  <View
                    style={{
                      width: SPACING,
                      height: SPACING,
                      backgroundColor: colors.light,
                      borderRadius: SPACING,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: '600',
                      color: colors.gray,
                      marginLeft: SPACING,
                    }}>
                    {el.title}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: '700',
                color: colors.dark,
                marginBottom: SPACING,
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.7,
                fontWeight: '500',
                color: colors.gray,
              }}>
              {recipe.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{padding: SPACING * 2, backgroundColor: colors.white}}>
          <TouchableOpacity
            style={{
              width: '100%',
              padding: SPACING * 2,
              backgroundColor: colors.black,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SPACING * 2,
            }}>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.white,
                fontWeight: '700',
              }}>
              Choose this for
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.yellow,
                fontWeight: '700',
                marginLeft: SPACING / 2,
              }}>
              $ {recipe.price}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RecipeDetailScreen;
