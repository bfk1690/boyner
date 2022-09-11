import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';
import {Close} from '../../components/icons';
import ModalPicker from '../ModalPicker/index';
import * as Actions from '../../redux/actions';
import {navigationRef} from '../../RootNavigation';
import {showMessage} from 'react-native-flash-message';

export default function ProductItemHorizontal({item, index}) {
  const [ticked, setTicked] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedCount, setSelectedCount] = useState('1');

  return (
    <>
      <TouchableOpacity
        onPress={() => navigationRef.navigate('ProductDetail', {product: item})}
        style={s.item}>
        <Image source={{uri: item.PictureUrl}} style={s.image} />
        <View style={s.info}>
          <View style={s.per}>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={s.name}>
              {item.ProductBrand} {item.ModelName}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Actions.removeFromBasket(item);
                showMessage({
                  message: 'Ürün sepetinizden kaldırıldı!',
                  backgroundColor: theme.main,
                  icon: 'success',
                  duration: 3000,
                });
              }}>
              <Close fill={theme.black} width={gh(18)} height={gh(18)} />
            </TouchableOpacity>
          </View>
          <Text style={s.propertie}>Renk: {item.Color}</Text>
          <Text style={s.propertie}>Beden: M</Text>
          <View style={s.countPrice}>
            <TouchableOpacity
              onPress={() => setShowPicker(true)}
              style={s.count}>
              <Text style={s.countText}>Adet: 1</Text>
            </TouchableOpacity>
            <View style={s.prices}>
              <Text style={s.stickerPrice}>
                {item.StickerPriceFormatted} {item.PriceCur}
              </Text>
              <Text style={s.discountPrice}>
                {item.DiscountPriceFormatted} {item.PriceCur}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setTicked(!ticked)} style={s.gift}>
            <View
              style={[
                s.tick,
                {backgroundColor: ticked ? theme.main : 'transparent'},
              ]}
            />
            <Text style={s.giftText}>Hediye Paketi İstiyorum</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <ModalPicker
        visible={showPicker}
        hide={() => setShowPicker(false)}
        count={item.StockQuantity}
      />
    </>
  );
}

const s = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: gh(15),
    backgroundColor: theme.white,
    borderBottomWidth: 2,
    borderBottomColor: '#f1f1f1',
    paddingVertical: gh(5),
  },
  per: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 0.32,
    width: gh(165),
    height: gh(170),
    resizeMode: 'contain',
  },
  info: {
    flex: 0.7,
    marginLeft: gh(7),
  },
  name: {
    fontSize: gh(16),
    fontWeight: 'bold',
    maxWidth: '90%',
  },
  propertie: {
    fontSize: gh(14),
    color: theme.gray,
    fontWeight: 'bold',
    marginTop: gh(10),
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
  countPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  tick: {
    width: gh(20),
    height: gh(20),
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.gray,
  },
  gift: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: gh(10),
  },
  giftText: {
    marginLeft: gh(7),
  },
  count: {
    backgroundColor: '#f1f1f1',
    paddingVertical: gh(5),
    paddingHorizontal: gh(15),
    borderRadius: 3,
  },
  countText: {
    fontSize: gh(15),
  },
});
