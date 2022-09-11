import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {gh} from '../../utils/functions';

export default function ProductItemHorizontal({item, index}) {
  return (
    <View style={s.item}>
      <Image source={{uri: item.PictureUrl}} style={s.image} />
      <View style={s.info}>
        <Text numberOfLines={2} ellipsizeMode={'tail'}>
          {item.ProductBrand} {item.ModelName}
        </Text>
        <Text>Renk: {item.Color}</Text>
        <Text>Beden: M</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingHorizontal: gh(15),
  },
  image: {
    flex: 0.3,
    width: gh(160),
    height: gh(170),
    resizeMode: 'contain',
  },
  info: {
    flex: 0.7,
  },
});
