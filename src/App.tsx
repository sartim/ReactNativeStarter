import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen, LoginScreen, ProfileScreen, SettingsScreen, SplashScreen } from './screens';
import { StatusBar, View, Text, Settings} from 'react-native';
import backgroundStyle from './styles/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// @ts-ignore
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: backgroundStyle.backgroundStyle.backgroundColor,
          marginTop: -20,
          marginBottom: 15,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Teacher Mwalimoo</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundStyle.backgroundStyle.backgroundColor,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// @ts-ignore
function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <PaperProvider
      settings={{
        rippleEffectEnabled: true
      }}
      >
        <StatusBar
          backgroundColor={backgroundStyle.backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
    
  );
}

export default App;
