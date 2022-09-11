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
import {theme} from '../utils/theme/index';
import {ad} from '../redux/reducers/basket';
import ProductItem from '../components/ProductItem';
import {navigationRef} from '../RootNavigation';

function Home(props) {
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
    return <ProductItem item={item} index={index} />;
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.filter}>
        <TouchableOpacity style={s.filterItem}>
          <Text>Sırala</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationRef.navigate('Filter')}
          style={s.filterItem}>
          <Text>Filtrele</Text>
        </TouchableOpacity>
      </View>
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
  filter: {
    flexDirection: 'row',
    height: gh(50),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
});

const mapStateToProps = state => ({
  basket: state.basket,
});

export default connect(mapStateToProps)(Home);
