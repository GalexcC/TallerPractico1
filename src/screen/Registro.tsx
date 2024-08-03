import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';

const RegistroScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('¡Error!', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }


    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      Alert.alert('¡Error!', 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.');
      return;
    }
    if (!email || !password || !username || !fullName || !birthDate) {
      Alert.alert('Atencion', 'Debes completar todos los campos.'); 
      return;
    }

    Alert.alert('¡Genial!', 'Registro exitoso!');
    navigation.navigate('Inicio');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.blogs.es/d32729/deadpoollobezno/1366_2000.jpeg' }}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>¡Hola! Únete a GalaxyStream</Text>
          <Text style={styles.subHeader}>Regístrate para disfrutar de las mejores películas y series</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Nombre de Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Nombre Completo"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            value={birthDate}
            onChangeText={setBirthDate}
            keyboardType="numeric"
          />
          <Button title="Registrarse" onPress={handleRegister} color="red" />
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputField: {
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default RegistroScreen;


