import {StyleSheet} from 'react-native';

const backgroundStyle = {
  backgroundColor: '#222',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundStyle.backgroundColor,
  },
  logo: {
    resizeMode: 'center',
    height: 200,
    width: 270,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
  },
  button: {
    borderRadius: 3,
    marginTop: 10,
    margin: 10,
    backgroundColor: '#EFEFEF',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  label: {
    marginTop: 10,
    marginLeft: 12,
  },
  drawer: {
    marginTop: 10,
  },
  profile: {
    backgroundColor: backgroundStyle.backgroundColor,
    marginTop: -20,
    marginBottom: 15,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flexDirection:'row',
  },
});

export default {styles, backgroundStyle};
