import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DEVICE_HEIGHT} from '../../utils/helpers/index';
import {Picker} from '@react-native-picker/picker';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';

export default function ModalPicker({visible, count, hide}) {
  const [selectedCount, setSelectedCounts] = useState();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={s.modal}
      visible={visible}
      onBackdropPress={() => alert('!23')}>
      <TouchableOpacity style={s.backdrop} onPress={hide} />
      <View style={s.modalBottom}>
        <View style={s.pickerGlobal}>
          <View style={s.header}>
            <TouchableOpacity onPress={hide} style={s.headerButton}>
              <Text style={s.buttonText}>İptal</Text>
            </TouchableOpacity>
            <Text style={s.title}>Adet</Text>
            <TouchableOpacity onPress={hide} style={s.headerButton}>
              <Text style={s.buttonText}>Tamam</Text>
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={selectedCount}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCounts(itemValue)
            }>
            {[...Array(count)].map((item, index) => {
              return (
                <Picker.Item
                  key={Math.random()}
                  label={`${index + 1}`}
                  value={`${index + 1}`}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalBottom: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: DEVICE_HEIGHT / 3,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerGlobal: {width: '100%', height: '100%'},
  backdrop: {width: '100%', height: DEVICE_HEIGHT - DEVICE_HEIGHT / 3},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: gh(50),
    backgroundColor: '#f1f2f2',
  },
  headerButton: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: gh(15),
  },
  buttonText: {
    color: theme.main,
    fontWeight: 'bold',
  },
  title: {
    fontSize: gh(18),
  },
});
