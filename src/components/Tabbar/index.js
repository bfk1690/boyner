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

function Tabbar({state, descriptors, navigation}) {
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

          return (
            <TouchableOpacity
              key={label}
              style={s.tabWrapper}
              // onPress={label !== 'Folder' ? onPress : null}>
              onPress={onPress}>
              {label === 'HomeStack' && (
                <View style={[s.tabItem]}>
                  <Home
                    width={gh(35)}
                    height={gh(35)}
                    fill={isFocused ? 'orange' : 'black'}
                  />
                </View>
              )}
              {label === 'Categories' && (
                <View style={[s.tabItem]}>
                  <Search
                    width={gh(35)}
                    height={gh(35)}
                    fill={isFocused ? 'orange' : 'black'}
                  />
                </View>
              )}
              {label === 'Basket' && (
                <View style={[s.tabItem]}>
                  <Basket
                    width={gh(35)}
                    height={gh(35)}
                    fill={isFocused ? 'orange' : 'black'}
                  />
                </View>
              )}
              {label === 'Favorites' && (
                <View style={[s.tabItem]}>
                  <Heart
                    width={gh(35)}
                    height={gh(35)}
                    fill={isFocused ? 'orange' : 'black'}
                  />
                </View>
              )}
              {label === 'Account' && (
                <View style={[s.tabItem]}>
                  <User
                    width={gh(35)}
                    height={gh(35)}
                    fill={isFocused ? 'orange' : 'black'}
                  />
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
    shadowRadius: 15,
    elevation: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  tabItemBlue: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: gh(72),
    // backgroundColor: theme.blue,
    borderRadius: 12,
  },
  tabWrapper: {
    height: gh(60),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  tabbarvisible: state.tabbarvisible,
  userpremium: state.userpremium,
  homedata: state.homedata,
});

export default connect(mapStateToProps)(Tabbar);
