import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Profile.style';
import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Meu perfil" />
      <Text style={styles.title}>Bem vindo de volta</Text>
      <Text numberOfLines={1} style={styles.labelName}>
        {user.name}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registrar')}
        style={styles.buttonRegister}>
        <Text style={styles.textButtonRegister}>Registrar gastos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSingOut} onPress={signOut}>
        <Text style={styles.textButtonSignOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
