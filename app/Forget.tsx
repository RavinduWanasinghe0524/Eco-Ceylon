import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Forget() {
  return (
       
        <View style={styles.overlay}>
          <Text style={styles.contentText}>Water as clear as a million pixels.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  background: {

  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: width * 0.05, // Responsive padding
    alignItems: 'center',
  },
  contentText: {
    color: 'white',
    fontSize: width * 0.05, // Responsive font size
    textAlign: 'center',
    marginBottom: height * 0.03, // Responsive margin
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: width * 0.1, // Responsive padding
    marginBottom: height * 0.02, // Responsive margin
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: width * 0.03, // Responsive padding
    borderRadius: 10,
    marginBottom: height * 0.02, // Responsive margin
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: width * 0.04, // Responsive font size
    fontWeight: 'bold',
  },
});
