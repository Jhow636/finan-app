import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import {styles} from './Header.style';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#121212" />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </SafeAreaView>
  );
};

export default Header;
