import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomButton({
  text,
  backgroundColor,
  borderRadius,
  width,
  height,
  color,
  fontSize,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, {backgroundColor, borderRadius, width, height}]}>
      <Text style={[s.text, {color, fontSize}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: 'bold',
  },
});
