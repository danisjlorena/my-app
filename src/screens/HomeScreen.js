import React, { useLayoutEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const categoriasMasculinas = [
    { nome: 'Camisas Masculinas', valor: 'mens-shirts' },
    { nome: 'Sapatos Masculinos', valor: 'mens-shoes' },
    { nome: 'Relógios Masculinos', valor: 'mens-watches' },
  ];

  const categoriasFemininas = [
    { nome: 'Bolsas Femininas', valor: 'womens-bags' },
    { nome: 'Vestidos Femininos', valor: 'womens-dresses' },
    { nome: 'Joias Femininas', valor: 'womens-jewellery' },
    { nome: 'Sapatos Femininos', valor: 'womens-shoes' },
    { nome: 'Relógios Femininos', valor: 'womens-watches' },
  ];

  const irParaCategoria = (categoria) => {
    navigation.navigate('ProductList', { categoria });
  };

  const sair = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Sair" onPress={sair} />,
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Categorias Masculinas</Text>
      {categoriasMasculinas.map((cat) => (
        <Button
          key={cat.valor}
          title={cat.nome}
          onPress={() => irParaCategoria(cat.valor)}
        />
      ))}

      <Text style={styles.titulo}>Categorias Femininas</Text>
      {categoriasFemininas.map((cat) => (
        <Button
          key={cat.valor}
          title={cat.nome}
          onPress={() => irParaCategoria(cat.valor)}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});