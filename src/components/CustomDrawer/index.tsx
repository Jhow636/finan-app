import React, {useContext} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {AuthContext} from '../../contexts/auth';

const CustomDrawer = props => {
  const {user, signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{width: 90, height: 90}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 18, marginTop: 14}}>Bem vindo</Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 14,
            paddingHorizontal: 20,
          }}>
          {user.name}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair"
        onPress={signOut}
        style={{width: 350}}
        labelStyle={{
          fontSize: 15,
          fontWeight: 'bold',
          backgroundColor: '#3b3dbf',
          padding: 10,
          borderRadius: 7,
          color: '#fff',
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
