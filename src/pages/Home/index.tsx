import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import api from '../../services/api.ts';
import {styles} from './Home.styles.ts';
import Header from '../../components/Header/index.tsx';
import {format} from 'date-fns';
import BalanceItem from '../../components/BalanceItem/index.tsx';
import {useIsFocused} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

export default function Home() {
  const {user}: any = useContext(AuthContext);
  const isFocused = useIsFocused(); //Sempre vai buscar os dados mesmo depois de sair do componenente
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/mm/yyyy');
      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <View style={styles.background}>
      <Header title="Minhas movimentações" />
      <FlatList
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.listBalance}
        keyExtractor={item => item.tag}
        renderItem={item => <BalanceItem data={item.item} />}
      />
    </View>
  );
}
