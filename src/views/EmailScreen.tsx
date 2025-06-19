import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { isValidEmail } from '../utils/validators';
import { useAuth } from '../context/AuthContext';

interface EmailScreenProps {
  navigation: any;
}

export default function EmailScreen({ navigation } : EmailScreenProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendCode, state } = useAuth();

  const handleSend = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('E-mail inválido');
      return;
    }
    try {
      setLoading(true);
      await sendCode(email);
      navigation.navigate('Confirmation', { email });
    } catch {
      Alert.alert('Erro ao enviar código');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Digite seu e-mail:</Text>
      <Input value={email} onChangeText={setEmail} placeholder="exemplo@email.com" keyboardType="email-address" />
      <Button title="Enviar código de autenticação" onPress={handleSend} loading={loading} />
    </View>
  );
}