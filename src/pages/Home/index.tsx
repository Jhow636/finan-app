import React, {use, useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Modal} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import api from '../../services/api.ts';
import {styles} from './Home.styles.ts';
import Header from '../../components/Header/index.tsx';
import {format, setDate} from 'date-fns';
import BalanceItem from '../../components/BalanceItem/index.tsx';
import {useIsFocused} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricoList from '../../components/HistoricoList/index.tsx';
import CalendarModal from '../../components/CalendarModal/index.tsx';

export default function Home() {
  const {user}: any = useContext(AuthContext);
  const isFocused = useIsFocused(); //Sempre vai buscar os dados mesmo depois de sair do componenente
  const [listBalance, setListBalance] = useState([]);
  const [listReceives, setListReceives] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [modalVisible, setModalVisibile] = useState(false);

  function filterDateMovements(dateSelected: Date) {
    setDateMovements(dateSelected);
  }

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      //let dateFormated = format(dateMovements, 'dd/MM/yyyy');
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
        setListReceives(receives.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovements]);

  async function deleteItem(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id,
        },
      });
      setDateMovements(new Date());
      Alert.alert('Sucesso', 'Item excluído com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao excluir o item!');
    }
  }

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
      <View style={styles.area}>
        <TouchableOpacity onPress={() => setModalVisibile(true)}>
          <Icon name="event" size={30} color="#121212" />
        </TouchableOpacity>
        <Text style={styles.title}>Ultimas movimentações</Text>
      </View>
      <FlatList
        style={styles.list}
        data={listReceives}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HistoricoList data={item} deleteItem={id => deleteItem(id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisibile(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </View>
  );
}
