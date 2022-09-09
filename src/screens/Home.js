import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProducts} from '../utils/services/products';
import {FlashList} from '@shopify/flash-list';
import {gh} from '../utils/functions/index';
import {connect, useSelector} from 'react-redux';
import * as Actions from '../redux/actions';
import {getBottomSpace} from '../components/Layout/getStatusBar';

function Home() {
  const [products, setProducts] = useState([]);
  //redux
  const {is_loading} = useSelector(state => state.loading);

  useEffect(() => {
    Actions.setLoading();
    getProducts()
      .then(res => {
        console.log(res, 'ürünler');
        setProducts(res.data.ProductList);
      })
      .finally(() => {
        Actions.removeLoading();
      });
  }, []);

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity style={s.productItem}>
        <View style={s.productImageContainer}>
          {/* <View style={s.colorCount}>
            <Text style={s.colorCountText}>2 Renk</Text>
          </View> */}
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
  };

  return (
    <SafeAreaView style={s.container}>
      {is_loading ? (
        <View style={s.loading}>
          <ActivityIndicator size={'small'} color={'orange'} />
        </View>
      ) : (
        <FlashList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item, index) => item + index}
          numColumns={2}
          estimatedItemSize={gh(400)}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: getBottomSpace(),
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: 'white',
    paddingHorizontal: gh(7),
    paddingVertical: gh(5),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    borderRadius: 9999,
  },
  productInfo: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  productPrices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: gh(7),
  },
  discountPrice: {
    fontSize: gh(17),
    fontWeight: 'bold',
    color: '#2F2F2F',
  },
  stickerPrice: {
    marginLeft: gh(20),
    color: '#5B5B5B',
    textDecorationLine: 'line-through',
    textDecorationColor: '#5B5B5B',
    fontSize: gh(15),
  },
  cargoInfo: {},
  cargoText: {
    color: '#77A9F0',
    fontWeight: 'bold',
  },
  productBrand: {
    color: '#595959',
    fontSize: gh(17),
    maxWidth: '75%',
  },
  modelName: {
    color: '#595959',
    fontSize: gh(17),
    textTransform: 'capitalize',
    maxWidth: '95%',
  },
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
