import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import SPACING from '../config/Resturant/spacing';
import colors from '../config/Resturant/colors';
import {Icon} from '@rneui/themed';
import DATA from '../config/Resturant/DATA';

const {width} = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
      <SafeAreaView>
        <View style={{padding: SPACING * 2}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: SPACING * 4.5,
                  height: SPACING * 4.5,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING,
                }}
                source={require('../assets/restaurant/avatar.jpg')}
              />
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: '800',
                  color: colors.dark,
                }}>
                Erikaasav
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{marginRight: SPACING}}>
                <Icon
                  name="notifications"
                  type="ionicon"
                  color={colors.dark}
                  size={SPACING * 3.5}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="menu"
                  type="ionicon"
                  color={colors.dark}
                  size={SPACING * 3.5}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{width: '60%', marginTop: SPACING * 2}}>
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 3,
                fontWeight: '700',
              }}>
              What you like to order?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.light,
              padding: SPACING * 0.5,
              borderRadius: SPACING,
            }}>
            <Icon
              name="search"
              type="ionicon"
              color={colors.gray}
              size={SPACING * 2.7}
            />
            <TextInput
              placeholder="Want to .."
              placeholderTextColor={colors.gray}
              style={{
                color: colors.gray,
                fontSize: SPACING * 2,
                marginLeft: SPACING,
              }}
            />
          </View>
          <ScrollView horizontal style={{marginTop: SPACING}}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={{marginRight: SPACING * 3}}
                onPress={() => setActiveCategory(index)}>
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: '600',
                      color: colors.gray,
                    },

                    activeCategory === index && {
                      color: colors.black,
                      fontWeight: '700',
                      fontSize: SPACING * 1.8,
                    },
                  ]}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginVertical: SPACING * 2,
            }}>
            {DATA[activeCategory].recipes.map(item => (
              <TouchableOpacity
                style={{width: ITEM_WIDTH, marginBottom: SPACING * 2}}
                key={item.id}>
                <Image
                  style={{
                    width: '100%',
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: '700',
                    color: colors.black,
                    marginTop: SPACING,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}>
                  Today discount {item.discount}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: '700',
                    color: colors.black,
                  }}>
                  $ {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
