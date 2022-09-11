import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ProductCarousel from '../../components/ProductCarousel/index';
import {DEVICE_WIDTH} from '../../utils/helpers/index';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';
import AddBasketCard from '../../components/AddBasketCard/index';

export default function ProductDetail({
  route: {
    params: {product},
  },
}) {
  console.log(product);
  return (
    <>
      <ScrollView style={s.container}>
        <View style={s.sliderArea}>
          {product.DiscountRate > 0 && (
            <View style={s.discountRate}>
              <Text style={s.discountText}>%{product.DiscountRate}</Text>
            </View>
          )}
          <ProductCarousel productImages={product.PictureCarousel} />
        </View>
        <View style={s.productInfos}>
          <View style={s.productNameBrand}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={s.brand}>
              {product.ProductBrand}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={2} style={s.model}>
              {product.ModelName}
            </Text>
          </View>
        </View>
      </ScrollView>
      <AddBasketCard product={product} />
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    marginBottom: gh(100),
  },
  sliderArea: {
    height: gh(567),
  },
  productInfos: {
    backgroundColor: theme.white,
    shadowColor: '#f0f0f0',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 10,
  },
  brand: {
    fontSize: gh(15),
    fontWeight: 'bold',
    maxWidth: '90%',
  },
  model: {
    fontSize: gh(15),
    maxWidth: '90%',
    marginTop: gh(7),
  },
  productNameBrand: {
    padding: gh(22),
  },
  discountRate: {
    position: 'absolute',
    bottom: gh(20),
    zIndex: 9999,
    width: gh(60),
    height: gh(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E26354',
  },
  discountText: {
    color: theme.white,
    fontWeight: 'bold',
    fontSize: gh(16),
  },
  productInfo: {
    backgroundColor: theme.white,
  },
});
