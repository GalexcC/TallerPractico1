import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const InicioScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleRegisterPress = () => {
    Alert.alert('Navegación', 'Ir a Registro');
    navigation.navigate('Registro');
  };

  const handleLoginPress = () => {
    Alert.alert('Navegación', 'Ir a Iniciar Sesión');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/foto-gratis/collage-fondo-pelicula_23-2149876004.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a GalaxyStream</Text>
        <Text style={styles.subtitle}>La mejor plataforma para ver películas y series.</Text>
        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
          <Text style={styles.buttonText}>Regístrate Ahora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ff5722', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#ff5722', 
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff5722',
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InicioScreen;
