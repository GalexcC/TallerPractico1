import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const InicioScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleRegisterPress = () => {
    navigation.navigate('Registro');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/foto-gratis/collage-fondo-pelicula_23-2149876004.jpg' }}
      style={styles.backgroundImage}>


      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bienvenido a GalaxyStream!</Text>
        <Text style={styles.subtitle}>La mejor plataforma para ver películas y series!</Text>

        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
          <Text style={styles.buttonText}>Registrate ahora</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, 
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25, 
    fontWeight: 'bold',
  },
});

export default InicioScreen;
