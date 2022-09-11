import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DEVICE_WIDTH} from '../../utils/helpers/index';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';
import {getBottomSpace} from '../Layout/getStatusBar';
import CustomButton from '../CustomButton';

export default function ApproveBasketCard({totalDiscount}) {
  return (
    <View style={s.addBasketCard}>
      <View style={s.priceArea}>
        <Text style={s.total}>Toplam</Text>
        <View style={s.prices}>
          <Text style={s.discountPrice}>
            {totalDiscount.toLocaleString('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            })}
          </Text>
        </View>
      </View>
      <View style={s.addBasket}>
        <CustomButton
          text={'Sepeti Onayla'}
          backgroundColor={theme.main}
          width={'85%'}
          height={gh(60)}
          color={theme.white}
          fontSize={gh(16)}
          borderRadius={3}
          onPress={() => alert('sepeti onayla')}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  addBasketCard: {
    position: 'absolute',
    bottom: 0,
    width: DEVICE_WIDTH,
    height: gh(110),
    backgroundColor: theme.white,
    paddingBottom: getBottomSpace(),
    shadowColor: '#f0f0f0',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceArea: {
    width: '35%',
    paddingLeft: gh(20),
    flexDirection: 'column',
  },
  addBasket: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    fontSize: gh(16),
    fontWeight: 'bold',
  },

  discountText: {
    fontWeight: 'bold',
    color: theme.white,
  },
  discountPrice: {
    fontSize: gh(17),
    fontWeight: 'bold',
    color: theme.main,
    marginTop: gh(3),
  },
});
