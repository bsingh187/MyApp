// src/screens/ProductListScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Product List</Text>
      <Button
        title="View Product"
        onPress={() => navigation.navigate('ProductDetail', { productId: 1 })}
      />
    </View>
  );
};

export default ProductListScreen;
