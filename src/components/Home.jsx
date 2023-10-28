import React from 'react';

import {
  TextInput,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import Category from './cards/Category';
import {SliderBox} from 'react-native-image-slider-box';
import CategoryList from './cards/CategoryList';

const images = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
];

const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.searchBar}>
        <Icon
          style={styles.searchIcon}
          name="search"
          size={20}
          color={colors.inputBorderLine}
        />
        <TextInput placeholder="search" style={styles.searchInput} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.carousel}>
          <SliderBox
            images={images}
            sliderBoxHeight={180}
            autoplay={true}
            circleLoop={true}
            autoplayInterval={10000}
          />
        </View>
        <CategoryList />
        <View style={styles.recommendations}>
          <Category />
          <Category />
          <Category />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 180,
    width: '100%',
    marginTop: 5,
  },
  categories: {
    height: 70,
    backgroundColor: 'green',
    marginTop: 5,
  },
  recommendations: {},
  home: {
    width: '100%',
    height: '100%',
    margin: 0,
    backgroundColor: colors.background,
  },
  searchBar: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.inputBorderLine,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  searchIcon: {
    marginLeft: 5,
    marginRight: 5,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
