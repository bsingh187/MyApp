// src/screens/CameraScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  const handleCaptureImage = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        includeBase64: false,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Take a photo to search</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleCaptureImage}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      {imageUri && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        </View>
      )}

      {imageUri && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('CropImage', { imageUri })}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
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
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CameraScreen;
