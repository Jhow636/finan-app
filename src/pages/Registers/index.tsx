import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {format, set} from 'date-fns';
import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';
import {styles} from './Registers.style';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

export default function Registers() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('receita');
  const navigation = useNavigation();

  function handleSubmit() {
    Keyboard.dismiss();
    if (name === '' || value === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    if (isNaN(parseFloat(value)) || type === null) {
      Alert.alert('Valor inválido');
      return;
    }

    Alert.alert(
      'Confirmar dados',
      `Nome: ${name} \nValor: ${value} \nDescrição: ${description} \nTipo: ${type}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => {
            submitReceive(value, type);
          },
        },
      ],
    );
  }

  async function submitReceive(value: string, type: string) {
    const today = new Date();
    const formattedDate = format(today, 'dd/MM/yyyy');
    const valueNumber = parseFloat(value);

    await api.post('/receive', {
      description: name,
      value: valueNumber,
      type: type,
      date: formattedDate,
    });

    setName('');
    setValue('');
    setDescription('');
    Alert.alert('Receita registrada com sucesso!');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.background}>
        <Header title="Registrando" />
        <SafeAreaView style={styles.formRegister}>
          <Text style={styles.title}>Registrar</Text>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Valor desejado"
            style={styles.input}
            keyboardType="numeric"
            value={value}
            onChangeText={text => setValue(text)}
          />
          <TextInput
            placeholder="Descrição"
            style={[styles.input, {height: 100}]}
            value={description}
            onChangeText={text => setDescription(text)}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
          <RegisterTypes
            type={type}
            sendTypeSelected={(item: any) => setType(item)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.textButtonSubmit}>Registrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
