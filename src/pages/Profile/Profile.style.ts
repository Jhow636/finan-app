import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelName: {
    fontSize: 24,
    marginTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  buttonRegister: {
    width: '90%',
    backgroundColor: '#3b3dbf',
    padding: 12,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textButtonRegister: {
    fontSize: 18,
    color: '#fff',
  },
  buttonSingOut: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#c62c36',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButtonSignOut: {
    fontSize: 18,
    color: '#c62c36',
  },
});
