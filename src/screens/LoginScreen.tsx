import React from 'react';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../utils';
import {Styles} from '../styles';
import {Image, StatusBar, View} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const Login = (mobileNumber: string, password: string,navigation: any) => {
  navigation.navigate('Home');
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function LoginScreen(): React.JSX.Element {
  const [mobileNumber, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const navigation = useNavigation();
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={Styles.default.backgroundStyle.backgroundColor} />
      <View style={Styles.styles.container}>
        <Card style={Styles.styles.card}>
          <Image style={Styles.styles.logo} source={Images.logo} />
          <TextInput
            style={Styles.styles.input}
            onChangeText={onChangeNumber}
            value={mobileNumber}
            keyboardType="email-address"
            label="Email"
            mode="outlined"
          />
          <TextInput
            style={Styles.styles.input}
            onChangeText={onChangePassword}
            secureTextEntry={true}
            value={password}
            label="Password"
            mode="outlined"
          />
          <Button
            rippleColor="#C7C7C7"
            textColor='#222'
            style={Styles.styles.button}
            mode="contained"
            onPress={() => Login(mobileNumber, password, navigation)}>
            LOGIN
          </Button>
          <View style={Styles.styles.flex}>
            <Text style={Styles.styles.label}>Not Registered?</Text> 
            <Text style={Styles.styles.label}>Register</Text>
          </View>
        </Card>
      </View>
    </PaperProvider>
  );
}

export default LoginScreen;
