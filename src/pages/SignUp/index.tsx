import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from '../SignIn/SignIn.styles';

import {AuthContext} from '../../contexts/auth';

const SignOut: React.FC = () => {
  const {signUp, loadingAuth}: any = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      Alert.alert('É necessário preencher todos os campos');
      return;
    }
    signUp(email, password, name);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.containerLogo}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled>
          {/* KeyboardAvoidingView -> Ele move todo conteúdo para cima quando o teclado é desparado */}
          <View style={styles.areaInput}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.areaInput}>
            <TextInput
              style={styles.input}
              placeholder="Seu email"
              value={email}
              onChangeText={text => setemail(text)}
            />
          </View>
          <View style={styles.areaInput}>
            <TextInput
              style={styles.input}
              placeholder="Seu senha"
              value={password}
              onChangeText={text => setpassword(text)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={handleSignUp}
            activeOpacity={0.8}
            style={styles.submitButton}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#ffF" />
            ) : (
              <Text style={styles.submitText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignOut;
