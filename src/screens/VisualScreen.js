// src/screens/VisualSearchScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VisualSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for an outfit by taking a photo or uploading an image</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.buttonText}>TAKE A PHOTO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Upload Image')}>
        <Text style={styles.buttonText}>UPLOAD AN IMAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VisualSearchScreen;
