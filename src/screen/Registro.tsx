import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView, ImageBackground } from 'react-native';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userBirthDate, setUserBirthDate] = useState('');

  const handleUserRegistration = () => {
    if (!userEmail || !userPassword || !userName || !userFullName || !userBirthDate) {
      Alert.alert('Faltan Datos', 'Todos los campos son obligatorios.');
      return;
    }

    Alert.alert('Éxito', 'Registro exitoso');
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={{ uri: 'https://us.123rf.com/450wm/kesu87/kesu871803/kesu87180300050/97572805-proyector-de-pel%C3%ADculas-de-estilo-antiguo-con-claqueta-y-carrete-de-acero-vintage-primer-plano.jpg?ver=6' }}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>Únete a MovieStream</Text>
          <Text style={styles.subHeader}>Regístrate para acceder a las mejores películas y series</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Nombre de Usuario"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Nombre Completo"
            value={userFullName}
            onChangeText={setUserFullName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Correo Electrónico"
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Contraseña"
            secureTextEntry
            value={userPassword}
            onChangeText={setUserPassword}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            value={userBirthDate}
            onChangeText={setUserBirthDate}
          />
          <Button title="Registrarse" onPress={handleUserRegistration} color="#ff5722" />
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
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
});

export default RegisterScreen;
