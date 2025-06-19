import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

interface ConfirmationScreenProps {
  navigation: any;
  route: any;
}

export default function ConfirmationScreen({ navigation, route } : ConfirmationScreenProps) {
  const { email } = route.params;

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Se o e-mail {email} for válido, você receberá um código em instantes.</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Validar" onPress={() => navigation.navigate('CodeValidation', { email })} />
    </View>
  );
}