import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Close} from '../../components/icons';
import {theme} from '../../utils/theme';
import {gh} from '../../utils/functions';
import {getFilters} from '../../utils/services/filters';
import {navigationRef} from '../../RootNavigation';

export default function Filter() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getFilters().then(res => {
      console.log(res, 'filtreler');
      setFilterData(res.data.Context.FilterModules);
    });
  }, []);
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => navigationRef.navigate('FilterDetail')}>
          <Text>Detail</Text>
        </TouchableOpacity>
        {console.log(filterData)}
        {/* {filterData.map((item, index) => {
          console.log(item, 'lşaksjd');
          return <Text>asşdlk</Text>;
        })} */}
      </View>
    </View>
  );
}

const s = StyleSheet.create({});
