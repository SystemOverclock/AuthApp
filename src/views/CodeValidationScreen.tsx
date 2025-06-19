import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

interface CodeValidationProps {
  route: any
}

export default function CodeValidationScreen({ route } : CodeValidationProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { email } = route.params;
  const { validateCode, state } = useAuth();
  const { isAuthenticated } = useAuth();

  const handleValidate = async () => {
    try {
      setLoading(true);
      await validateCode(email, code);
      isAuthenticated() ? Alert.alert('Sucesso', 'Código validado com sucesso!') : Alert.alert('Erro', 'Código inválido ou expirado');
    } catch {
      Alert.alert('Erro', 'Código inválido ou expirado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Insira o código enviado para {email}</Text>
      <Input value={code} onChangeText={setCode} placeholder="Código de 6 dígitos" keyboardType="numeric" />
      <Button title="Validar" onPress={handleValidate} loading={loading} />
    </View>
  );
}