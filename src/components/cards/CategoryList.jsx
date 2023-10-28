import React from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors';

const Data = [
  {
    title: 'Mobiles',
    img: require('../images/category/mobiles.png'),
  },
  {
    title: 'Electronics',
    img: require('../images/category/electronics.png'),
  },
  {
    title: 'Fashion',
    img: require('../images/category/fashion.png'),
  },
  {
    title: 'Home',
    img: require('../images/category/home.png'),
  },
  {
    title: 'Appliances',
    img: require('../images/category/appliances.png'),
  },
  {
    title: 'Sports',
    img: require('../images/category/sports.png'),
  },
  {
    title: 'Toys',
    img: require('../images/category/toys.png'),
  },
];

const Category = ({item, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.item, pressed && styles.itemPressed]}
      onPress={onPress}>
      <View style={styles.imgView}>
        <Image source={item.img} style={styles.img} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </Pressable>
  );
};

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 5,
          color: colors.textColor,
          fontWeight: 'bold',
          fontSize: 17,
        }}>
        Categories
      </Text>
      <FlatList
        horizontal={true}
        data={Data}
        renderItem={({item}) => <Category item={item} />}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  item: {
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  imgView: {
    height: 70,
    width: 70,
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  itemTitle: {
    marginTop: 8,
    color: colors.textColor,
  },
  itemPressed:{
    opacity: 0.2
  }
});

export default CategoryList;
