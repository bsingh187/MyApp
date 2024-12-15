import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const CartScreen = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Product 1', price: 50 },
    { id: 2, title: 'Product 2', price: 30 },
  ]); // This should come from a global state or a context

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <View>
      <Text>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Total: ${calculateTotal()}</Text>
      <Button title="Proceed to Checkout" onPress={() => alert('Checkout')} />
    </View>
  );
};

export default CartScreen;
