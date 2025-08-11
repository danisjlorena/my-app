import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { produto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{produto.title}</Text>
      <Image source={{ uri: produto.thumbnail }} style={styles.image} />
      <Text style={styles.price}>Preço: ${produto.price}</Text>
      <Text style={styles.description}>{produto.description}</Text>
      <Text style={styles.brand}>Marca: {produto.brand}</Text>
      <Text style={styles.category}>Categoria: {produto.category}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  brand: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#555',
  },
});