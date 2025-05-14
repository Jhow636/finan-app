import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {styles} from './BalanceItem.style';

export default function BalanceItem({data}: any) {
  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo atual',
        color: '#3b3bdf',
      };
    } else if (data.tag === 'receita') {
      return {
        label: 'Entradas de hoje',
        color: '#00b94a',
      };
    } else {
      return {
        label: 'Saidas de hoje',
        color: '#ef463a',
      };
    }
  }, [data]);

  return (
    <View style={[styles.container, {backgroundColor: labelName.color}]}>
      <Text style={styles.label}>{labelName.label}</Text>
      <Text style={styles.balance}>R$ {data.saldo}</Text>
    </View>
  );
}
