import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './RegisterTypes.styles';
import Feather from 'react-native-vector-icons/Feather';

const RegisterTypes = ({type, sendTypeSelected}: any) => {
  const [selectedType, setSelectedType] = useState(type);

  function changeType(item: string) {
    setSelectedType(item);
    sendTypeSelected(item);
  }

  return (
    <View style={styles.registerContainer}>
      <TouchableOpacity
        style={[
          styles.registerButton,
          selectedType === 'receita'
            ? {
                backgroundColor: '#fff',
                borderWidth: 1.5,
                borderColor: '#3b3dbf',
              }
            : {backgroundColor: '#e7e7e7'},
        ]}
        onPress={() => {
          changeType('receita');
        }}>
        <Feather name="arrow-up" size={25} color="#121212" />
        <Text style={styles.registerLabel}>Receita</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.registerButton,
          selectedType === 'despesa'
            ? {
                backgroundColor: '#fff',
                borderWidth: 1.5,
                borderColor: '#3b3dbf',
              }
            : {backgroundColor: '#e7e7e7'},
        ]}
        onPress={() => {
          changeType('despesa');
        }}>
        <Feather name="arrow-down" size={25} color="#121212" />
        <Text style={styles.registerLabel}>Despesa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterTypes;
