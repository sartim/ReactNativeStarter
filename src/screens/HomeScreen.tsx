import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#222',
    marginTop: 10,
    marginLeft: 12,
  },
});

// @ts-ignore
function HomeScreen({navigation}): React.JSX.Element {
  useEffect(() => {
    checkToken();
  }, []);

  // @ts-ignore
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Splash');
      }
    } catch (error) {
      console.error('Error checking token:', error);
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Text style={styles.label}>Home Screen</Text>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
