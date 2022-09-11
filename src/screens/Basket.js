import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {gh} from '../utils/functions';
import {theme} from '../utils/theme';
import {FlashList} from '@shopify/flash-list';
import ProductItemHorizontal from '../components/ProductItemHorizontal/index';

export default function Basket() {
  const {basketItems} = useSelector(state => state.basket);

  const renderItem = (item, index) => {
    return <ProductItemHorizontal item={item} index={index} />;
  };

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.countText}>Sepet ({basketItems.length} Ürün)</Text>
      <View style={s.container}>
        {basketItems.length > 0 ? (
          <FlashList
            showsVerticalScrollIndicator={false}
            data={basketItems}
            ListHeaderComponent={() => {
              return (
                <View style={s.cargo}>
                  <Text style={s.cargoText}>Tahmini Teslimat: 14-18 Eylül</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => item + index}
            estimatedItemSize={gh(400)}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        ) : (
          <Text>Sepetiniz Boş</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  countText: {
    textAlign: 'center',
    fontSize: gh(18),
    fontWeight: 'bold',
    paddingBottom: gh(10),
  },
  cargo: {
    backgroundColor: '#e5e5e5',
    paddingVertical: gh(12),
    marginBottom: gh(7),
  },
  cargoText: {
    fontSize: gh(15),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
