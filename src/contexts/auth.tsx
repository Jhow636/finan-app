import React, {createContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

interface User {
  id: string;
  name: string;
  token?: string;
  email: string;
}

export default function AuthProvider({children}: any) {
  const [user, setUser] = useState<User | null>(null);

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        const response = await api
          .get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        const {id, name, email} = response.data;
        setUser({id, name, email});
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signUp(email: string, password: string, name: string) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: name,
        password: password,
        email: email,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.log('Error ao cadastrar: ' + error);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.log('Erro ao fazer o Log Out ' + error);
      });
    //Limpar todo Async Storage
  }

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      const {id, name, token} = response.data;

      const data: User = {
        id: id,
        name: name,
        token: token,
        email: email,
      };
      await AsyncStorage.setItem('@finToken', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(data);

      setLoadingAuth(false);
    } catch (error) {
      console.log('Error ao fazer login: ' + error);
      setLoadingAuth(false);
    }
  }

  //!!user -> converte a variavel para um valor booleano
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
