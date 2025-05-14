import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    paddingTop: 30,
  },
  formRegister: {
    marginTop: 14,
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 25,
    marginBottom: 20,
    color: '#000',
    fontWeight: 700,
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 17,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 14,
    borderRadius: 4,
  },
  textButtonSubmit: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    width: '90%',
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b94a',
  },
});
