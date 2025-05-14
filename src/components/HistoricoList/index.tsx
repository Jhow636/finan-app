import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './HistoricoList.style.ts';
import api from '../../services/api.ts';

export default function HistoricoList({data, deleteItem}: any) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você deseja realmente excluir esse item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id),
        },
      ],
      {cancelable: false}, // O alerta não pode ser fechado ao pressionar fora
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <View style={styles.container}>
        <View
          style={[
            styles.iconView,
            data.type === 'despesa'
              ? {backgroundColor: '#c62c36'}
              : {backgroundColor: '#049301'},
          ]}>
          <Icon
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color={'#fff'}
          />
          <Text style={styles.tipoText}>{data.type}</Text>
        </View>
        <Text style={styles.valorText}>R$ {data.value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
