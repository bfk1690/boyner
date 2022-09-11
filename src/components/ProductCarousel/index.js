import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {createRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {DEVICE_WIDTH} from '../../utils/helpers/index';
import {gh} from '../../utils/functions/index';
import Caroseul, {Pagination} from 'react-native-snap-carousel';
import {theme} from '../../utils/theme/index';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function ProductCarousel({productImages}) {
  const carouselRef = createRef();

  const [activeSlide, setActiveSlide] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [viewerImages, setViewerImages] = useState([]);

  useEffect(() => {
    prepareViewerImages();
  }, []);

  const prepareViewerImages = () => {
    let images = [];
    for (let i in productImages) {
      images.push({url: productImages[i]});
    }
    console.log();
    images;
    setViewerImages(images);
    console.log(viewerImages);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setViewerVisible(true)}>
        <Image style={s.image} source={{uri: item}} />
      </TouchableOpacity>
    );
  };

  const pagination = () => {
    return (
      <View style={s.pagination}>
        <Pagination
          dotsLength={productImages.length}
          activeDotIndex={activeSlide}
          dotStyle={s.dotStyle}
          dotContainerStyle={s.dotContainer}
          inactiveDotOpacity={1}
          inactiveDotScale={0.7}
        />
      </View>
    );
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={productImages}
        renderItem={renderItem}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={DEVICE_WIDTH}
        initialScrollIndex={productImages.length}
        loop={true}
        enableSnap={true}
        horizontal={true}
        inactiveSlideScale={1}
        activeSlideOffset={DEVICE_WIDTH}
        loopClonesPerSide={productImages.length}
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
      />
      {pagination()}
      <Modal visible={viewerVisible} transparent={true}>
        <ImageViewer
          imageUrls={viewerImages}
          useNativeDriver={true}
          enableSwipeDown
          onSwipeDown={() => setViewerVisible(false)}
          onChange={index => {
            carouselRef.current.snapToItem(index);
          }}
          index={activeSlide}
        />
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pagination: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  dotStyle: {
    width: gh(15),
    height: gh(15),
    borderRadius: gh(15),
    borderWidth: 1,
    borderColor: theme.white,
    backgroundColor: theme.black,
    margin: 0,
  },
  dotContainer: {marginLeft: 0},
});
