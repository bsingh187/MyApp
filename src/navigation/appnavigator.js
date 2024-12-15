
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VisualSearchScreen from '../screens/VisualSearchScreen';
import CameraScreen from '../screens/CameraScreen';
import CropImageScreen from '../screens/CropImageScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VisualSearch">
        <Stack.Screen name="VisualSearch" component={VisualSearchScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="CropImage" component={CropImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
