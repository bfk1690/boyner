import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {getBottomSpace} from '../Layout/getStatusBar';
import {gh} from '../../utils/functions/index';
import {theme} from '../../utils/theme/index';
import {navigationRef} from '../../RootNavigation';

export default function ProductItem({item, index}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigationRef.navigate('ProductDetail', {product: item});
      }}
      key={index.toString()}
      style={s.productItem}>
      <View style={s.productImageContainer}>
        <Image source={{uri: item.PictureUrl}} style={s.productImage} />
      </View>
      <View style={s.productInfo}>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={s.productBrand}>
          {item.ProductBrand}
        </Text>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={s.modelName}>
          {item.ModelName}
        </Text>
        <View style={s.productPrices}>
          <Text style={s.discountPrice}>
            {item.DiscountPriceFormatted} {item.PriceCur}
          </Text>
          <Text style={s.stickerPrice}>
            {item.StickerPriceFormatted} {item.PriceCur}
          </Text>
        </View>
        {item.IsQuickCargo && (
          <View style={s.cargoInfo}>
            <Text style={s.cargoText}>Hızlı Gönderi</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  productImage: {
    width: '100%',
    height: gh(280),
    resizeMode: 'contain',
  },
  productItem: {
    flex: 1,
    margin: gh(8),
  },
  productImageContainer: {
    position: 'relative',
  },
  colorCount: {
    position: 'absolute',
    bottom: gh(15),
    right: gh(15),
    backgroundColor: theme.white,
    paddingHorizontal: gh(7),
    paddingVertical: gh(5),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    borderRadius: 9999,
  },
  productInfo: {},
  productPrices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: gh(7),
  },
  discountPrice: {
    fontSize: gh(17),
    fontWeight: 'bold',
    color: theme.darkGray,
  },
  stickerPrice: {
    marginLeft: gh(20),
    color: theme.gray,
    textDecorationLine: 'line-through',
    textDecorationColor: theme.gray,
    fontSize: gh(15),
  },
  cargoInfo: {},
  cargoText: {
    color: theme.blue,
    fontWeight: 'bold',
  },
  productBrand: {
    color: theme.gray,
    fontSize: gh(17),
    maxWidth: '75%',
  },
  modelName: {
    color: theme.gray,
    fontSize: gh(17),
    textTransform: 'capitalize',
    maxWidth: '95%',
  },
});
