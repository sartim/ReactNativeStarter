import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Images from '../utils/ImagePaths';

const {width, height} = Dimensions.get('window');

// @ts-ignore
function SplashScreen({navigation}): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the login screen after 2000ms (2 seconds)
      navigation.navigate('Login');
    }, 2000);
  }, [navigation]);

  const backgroundStyle = {
    backgroundColor: '#222',
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#222',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
    },
    logo: {
      resizeMode: 'center',
      height: 100,
      width: 200,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#FFF',
    },
    logoContainer: {
      flexDirection: 'row',
    },
    footerText: {
      fontSize: 10,
      color: '#FFF',
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <View style={styles.container}>
        <Text style={styles.titleText}>React Native Stater</Text>
        <Image style={styles.logo} source={Images.logo} />
        <Text style={styles.footerText}>Developed using React Native</Text>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
