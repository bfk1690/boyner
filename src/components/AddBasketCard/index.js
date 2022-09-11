import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DEVICE_WIDTH} from '../../utils/helpers/index';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';
import {getBottomSpace} from '../Layout/getStatusBar';
import CustomButton from '../CustomButton';
import * as Actions from '../../redux/actions';

export default function AddBasketCard({product}) {
  return (
    <View style={s.addBasketCard}>
      <View style={s.priceArea}>
        <View style={s.discountRate}>
          <Text style={s.discountText}>%57</Text>
        </View>
        <View style={s.prices}>
          <Text style={s.stickerPrice}>
            {product.StickerPriceFormatted} {product.PriceCur}
          </Text>
          <Text style={s.discountPrice}>
            {product.DiscountPriceFormatted} {product.PriceCur}
          </Text>
        </View>
      </View>
      <View style={s.addBasket}>
        <CustomButton
          text={'Sepete Ekle'}
          backgroundColor={theme.main}
          width={'85%'}
          height={gh(60)}
          color={theme.white}
          fontSize={gh(16)}
          borderRadius={3}
          onPress={() => Actions.addToBasket(product)}
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
    width: '50%',
    paddingLeft: gh(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBasket: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountRate: {
    backgroundColor: '#E26050',
    width: gh(55),
    height: gh(40),
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    fontWeight: 'bold',
    color: theme.white,
  },
  prices: {
    marginLeft: gh(10),
  },
  discountPrice: {
    fontSize: gh(17),
    fontWeight: 'bold',
    color: theme.main,
  },
  stickerPrice: {
    color: theme.gray,
    textDecorationLine: 'line-through',
    textDecorationColor: theme.gray,
    fontSize: gh(15),
  },
});
