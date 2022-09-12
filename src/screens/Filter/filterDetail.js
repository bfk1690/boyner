import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme/index';
import {gh} from '../../utils/functions';

export default function FilterDetail({
  route: {
    params: {filterItems},
  },
}) {
  //   console.log(filterItems);
  return (
    <ScrollView style={s.container}>
      {filterItems.map((item, index) => {
        return (
          <TouchableOpacity
            key={index.toString()}
            //   onPress={() =>
            //     // navigationRef.navigate('FilterDetail', {
            //     //   filterItems: item[i].FilterModuleItems,
            //     // })
            //   }
            style={s.filterItem}>
            <Text style={s.filterItemText}>{item.Name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  filterItem: {
    width: '100%',
    height: gh(60),
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    justifyContent: 'center',
    paddingLeft: gh(10),
  },
  filterItemText: {
    fontSize: gh(16),
    fontWeight: 'bold',
  },
});
