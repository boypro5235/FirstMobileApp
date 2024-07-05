import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      navigation.replace('Main'); // Navigate to Home if phone number is valid
    } else {
      Alert.alert('Error', 'Invalid phone number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your phone number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Icon name="home-outline" size={50} color="black"/>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
}

function ScanningScreen() {
  return (
    <View style={styles.container}>
      <Icon name="scan-outline" size={50} color="black"/>
      <Text style={styles.text}>Scanning</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="Scanning" 
        component={ScanningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="scan-outline" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInScreen" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  text: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200EE',
    borderRadius: 8,
    padding: 15,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
