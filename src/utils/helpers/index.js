import {Dimensions} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export function getProductIndex(products, id) {
  let itemIndex = products.findIndex(item => item.ListingId === id);
  return itemIndex;
}
