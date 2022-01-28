import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Costs } from './LeftList/Costs';
import Earnings from './LeftList/Earnings';
import Login from './LeftList/Login'
import Settings from './LeftList/Settings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Costs" component={Costs} />
        <Drawer.Screen name="Earnings" component={Earnings} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
