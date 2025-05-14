import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {styles} from './SignIn.styles';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, loadingAuth}: any = useContext(AuthContext);

  function handleSingIn() {
    signIn(email, password);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.containerLogo}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled>
          {/* KeyboardAvoidingView -> Ele move todo conteúdo para cima quando o teclado é desparado */}
          <Image
            style={styles.logo}
            source={require('../../assets/images/Logo.png')}
          />
          <View style={styles.areaInput}>
            <TextInput
              style={styles.input}
              placeholder="Seu email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.areaInput}>
            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={handleSingIn}
            activeOpacity={0.8}
            style={styles.submitButton}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#ffF" />
            ) : (
              <Text style={styles.submitText}>Acessar</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Criar uma conta</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
