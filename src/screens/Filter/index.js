import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Close} from '../../components/icons';
import {theme} from '../../utils/theme';
import {gh} from '../../utils/functions';
import {getFilters} from '../../utils/services/filters';
import {navigationRef} from '../../RootNavigation';

export default function Filter() {
  const filterItems = [
    '1056',
    '1057',
    '1059',
    '1060',
    '1064',
    'Price',
    'fstdlvry',
  ];
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getFilters().then(res => {
      let data = [];
      console.log(res, 'filtreler');
      data.push(res.data.Context.FilterModules);
      setFilterData(data);
    });
  }, []);
  return (
    <ScrollView style={s.container}>
      {/* <TouchableOpacity
          onPress={() => navigationRef.navigate('FilterDetail')}>
          <Text>Detail</Text>
        </TouchableOpacity> */}
      {filterData.map((item, index) => {
        return filterItems.map(i => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigationRef.navigate('FilterDetail', {
                  filterItems: item[i].FilterModuleItems,
                })
              }
              style={s.filterItem}>
              <Text style={s.filterItemText}>{item[i].Name}</Text>
            </TouchableOpacity>
          );
        });
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
