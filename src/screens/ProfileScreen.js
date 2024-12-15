import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>User Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default ProfileScreen;
