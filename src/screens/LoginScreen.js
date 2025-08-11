
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'Campo obrigatório';
    if (!password) newErrors.password = 'Campo obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    if (username === 'admin' && password === '123') {
      setLoginError(false);
      navigation.replace('Home', { user: username });
    } else {
      setLoginError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Insira seus dados para entrar na sua conta.</Text>

      <View style={styles.form}>
        {loginError && <Text style={styles.loginError}>Username ou senha inválidos</Text>}
        
        <TextInput
          placeholder="Username"
          style={[styles.input, errors.username && styles.inputError]}
          value={username}
          onChangeText={text => {
            setUsername(text);
            setErrors(prev => ({ ...prev, username: undefined }));
          }}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <View style={[styles.passwordContainer, errors.password && styles.inputError]}>
          <TextInput
            placeholder="Senha"
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setErrors(prev => ({ ...prev, password: undefined }));
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggle}>{showPassword ? '🔓' : '🔒'}</Text>
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topHalf: { backgroundColor: '#2D7BF4', height: '35%' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: '12%',
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: '#eee',
    position: 'absolute',
    top: '18%',
    alignSelf: 'center'
  },
  form: {
    backgroundColor: '#fff',
    marginTop: -40,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10
  },
  loginError: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  passwordInput: {
    flex: 1
  },
  toggle: {
    marginLeft: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: '#2D7BF4',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default LoginScreen;
