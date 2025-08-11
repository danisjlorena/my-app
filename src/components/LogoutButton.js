import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return <Button title="Sair" onPress={handleLogout} />;
};

export default LogoutButton;