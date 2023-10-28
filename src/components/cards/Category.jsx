import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoryProduct from './CategoryProduct';
import {colors} from '../../constants/colors';

const Category = () => {
  const data = [1, 2, 4, 5, 6, 7];

  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>Electronics</Text>
      <FlatList
        style={styles.flatlist}
        horizontal={true}
        data={data}
        renderItem={({item}) => <CategoryProduct />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    height: 240,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: colors.background,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 17,
    marginLeft: 5,
    marginBottom: 2,
    color: colors.textColor,
    fontWeight: 'bold',

  },
});

export default Category;
