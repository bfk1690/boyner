import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {gh} from '../utils/functions';
import {theme} from '../utils/theme';
import {FlashList} from '@shopify/flash-list';
import ProductItemHorizontal from '../components/ProductItemHorizontal/index';
import ApproveBasketCard from '../components/ApproveBasketCard';

export default function Basket() {
  const {basketItems} = useSelector(state => state.basket);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalSticker, setTotalSticker] = useState(0);

  const renderItem = (item, index) => {
    return <ProductItemHorizontal item={item} index={index} />;
  };

  useEffect(() => {
    calculateTotal();
  }, [basketItems]);

  const calculateTotal = () => {
    let totalDiscount = 0;
    let totalSticker = 0;
    for (let i in basketItems) {
      totalDiscount += basketItems[i].DiscountPrice;
      totalSticker += basketItems[i].StickerPrice;
    }
    setTotalDiscount(totalDiscount);
    setTotalSticker(totalSticker);
  };

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.countText}>Sepet ({basketItems.length} Ürün)</Text>
      <View style={[s.container, {marginBottom: gh(110)}]}>
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
          <View style={s.empty}>
            <Text style={s.emptyText}>Sepetiniz Boş</Text>
          </View>
        )}
      </View>
      {basketItems.length > 0 && (
        <ApproveBasketCard
          totalDiscount={totalDiscount}
          totalSticker={totalSticker}
        />
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
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
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: gh(20),
    fontWeight: 'bold',
  },
});
