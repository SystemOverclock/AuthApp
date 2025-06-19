import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmailScreen from '../views/EmailScreen';
import ConfirmationScreen from '../views/ConfirmationScreen';
import CodeValidationScreen from '../views/CodeValidationScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="CodeValidation" component={CodeValidationScreen} />
    </Stack.Navigator>
  );
}
