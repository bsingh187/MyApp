import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { fetchProducts } from '../services/api';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProducts();
      const selectedProduct = data.find((item) => item.id === productId);
      setProduct(selectedProduct);
    };
    getProduct();
  }, [productId]);

  return (
    <View>
      {product && (
        <>
          <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
        </>
      )}
      <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
    </View>
  );
};

export default ProductDetailScreen;
