import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'; 
import Checkbox from 'expo-checkbox'; // Imported from expo-checkbox
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/App';

const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Hi, Welcome Back! 👋
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Your Password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Text style={styles.eyeIcon}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Remember Me & Forgot Password */}
      <View style={styles.rememberForgotContainer}>
        <View style={styles.rememberContainer}>
          <Checkbox value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>  

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View style={styles.orSeparator}>
        <View style={styles.separatorLine} />
        <Text style={styles.orText}>Or With</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Social Logins */}
      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('@/assets/images/fb.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('@/assets/images/google.png')} style={styles.socialIcon} />
        <Text style={styles.socialGoogleText}>Login with Google</Text>
      </TouchableOpacity>
      
      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    color: 'black',
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 4,
    marginBottom: 16,
  },
  passwordContainer: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    color: '#7a7a7a',
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    color: '#666666',
  },
  forgotText: {
    color: '#d32f2f',
  },
  loginButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 14,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#cccccc',
  },
  orText: {
    marginHorizontal: 16,
    color: '#757575',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  googleButton: {
    borderColor: '#cccccc',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  socialButtonText: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
  },
  socialGoogleText: {
    color: 'black',
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#666666',
  },
  signupLink: {
    color: '#1e88e5',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
