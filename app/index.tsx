import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/App'; // Adjust the import path if necessary

const { width, height } = Dimensions.get('window');

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

export default function Index() {
  const navigation = useNavigation<IndexScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/ocean.jpg')} 
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>ECO Ceylon</Text>
          <Text style={styles.subtitle}>Join ECO Ceylon today – Clean, Earn, and Make a Difference!</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: width * 0.08,
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    color: 'white',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  subtitle: {
    color: 'white',
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});
