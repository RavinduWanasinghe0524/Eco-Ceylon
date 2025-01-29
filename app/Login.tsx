import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/App';

const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SecondPage'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();


  return (

        <View style={styles.overlay}>
          <Text style={styles.contentText}>Water as clear as a million pixels.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log In</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
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
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: width * 0.05, // Responsive padding
    flex: 1,
    justifyContent: 'flex-end',
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
