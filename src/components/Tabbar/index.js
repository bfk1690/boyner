import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  Linking,
  Dimensions,
} from 'react-native';
import {getBottomSpace} from '../Layout/getStatusBar';
// import {theme} from '../../utils/theme';
import {gh} from '../../utils/functions';
import {Home, Search, Heart, User, Basket} from '../icons';
import {connect, useSelector} from 'react-redux';
import {theme} from '../../utils/theme/index';

function Tabbar({state, descriptors, navigation}) {
  const {basketItems} = useSelector(state => state.basket);
  console.log(basketItems, 'ahey');
  // console.log(basketItems);
  return (
    <View
      style={{
        height: gh(50),
      }}>
      <View style={[s.tabGlobal]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          let color = isFocused ? theme.main : theme.black;
          return (
            <TouchableOpacity
              key={label}
              style={s.tabWrapper}
              // onPress={label !== 'Folder' ? onPress : null}>
              onPress={onPress}>
              {label === 'Home' && (
                <View style={[s.tabItem]}>
                  <Home width={gh(30)} height={gh(30)} fill={color} />
                  <Text style={[s.tabText, {color}]}>Anasayfa</Text>
                </View>
              )}
              {label === 'Categories' && (
                <View style={[s.tabItem]}>
                  <Search width={gh(30)} height={gh(30)} fill={color} />
                  <Text style={[s.tabText, {color}]}>Kategoriler</Text>
                </View>
              )}
              {label === 'Basket' && (
                <View style={[s.tabItem]}>
                  {basketItems.length > 0 && (
                    <View style={s.basketCount}>
                      <Text style={s.basketText}>{basketItems.length}</Text>
                    </View>
                  )}

                  <Basket width={gh(30)} height={gh(30)} fill={color} />
                  <Text style={[s.tabText, {color}]}>Sepetim</Text>
                </View>
              )}
              {label === 'Favorites' && (
                <View style={[s.tabItem]}>
                  <Heart width={gh(30)} height={gh(30)} fill={color} />
                  <Text style={[s.tabText, {color}]}>Favorilerim</Text>
                </View>
              )}
              {label === 'Account' && (
                <View style={[s.tabItem]}>
                  <User width={gh(30)} height={gh(30)} fill={color} />
                  <Text style={[s.tabText, {color}]}>Hesabım</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  tabGlobal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:
      Platform.OS == 'ios' ? (getBottomSpace() > 0 ? gh(12) : 0) : 0,
    height: getBottomSpace() > 0 ? gh(65) + getBottomSpace() / 2 : gh(65),
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  tabText: {
    fontSize: gh(12),
    textAlign: 'center',
    marginTop: gh(3),
    fontWeight: 'bold',
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  tabItemBlue: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: gh(72),
    borderRadius: 12,
  },
  tabWrapper: {
    height: gh(60),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketCount: {
    position: 'absolute',
    top: 0,
    left: gh(41), // icon + basket width / 2
    width: gh(22),
    height: gh(22),
    backgroundColor: theme.main,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  basketText: {
    fontSize: gh(12),
    color: theme.white,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Tabbar);
