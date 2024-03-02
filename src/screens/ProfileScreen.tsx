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
function ProfileScreen({navigation}): React.JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Text style={styles.label}>Profile Screen</Text>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
