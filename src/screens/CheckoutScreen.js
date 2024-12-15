
import React from 'react';
import { View, Text, Button } from 'react-native';

const CheckoutScreen = () => {
  return (
    <View>
      <Text>Checkout Screen</Text>
      <Button title="Complete Purchase" onPress={() => alert('Purchase Completed!')} />
    </View>
  );
};

export default CheckoutScreen;
