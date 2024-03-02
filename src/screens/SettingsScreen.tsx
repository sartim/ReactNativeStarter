import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

// @ts-ignore
function SettingsScreen({navigation}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Notifications'},
          {key: 'Logout'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default SettingsScreen;
