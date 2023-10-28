import React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {colors} from '../../constants/colors';

const CategoryProduct = () => {
  return (
    <Pressable style={({pressed})=>[styles.product, pressed && styles.productPressed]}>
      <View style={styles.productImg}>
        <Image style={styles.img} source={require('../images/test.jpg')} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Girl with flower</Text>
        <Text
          style={{
            fontSize: 12,
            textDecorationLine: 'line-through',
            fontWeight: 'bold',
          }}>
          ₹ 8,999
        </Text>
        <Text style={{fontWeight: 'bold', color: colors.textColor}}>
          ₹ 6,999
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  product: {
    width: 125,
    margin: 5,
    backgroundColor: colors.background,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
    borderRadius: 3,
  },
  productImg: {
    width: '100%',
    height: 125,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  details: {
    flex: 1,
    paddingLeft: 3,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: colors.textColor,
  },
  productPressed:{
    opacity: 0.4,
  }
});

export default CategoryProduct;
