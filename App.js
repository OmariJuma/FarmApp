import React from 'react';
import { PaperProvider, Drawer, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './Components/UI/AppBar';
import Home from './Components/Pages/Home';
import Second from './Components/Pages/Second';

function App() {
  const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <AppBar />
            <Home/>
            <Stack.Navigator>
              <Stack.Screen name="Second" component={Second} />
            </Stack.Navigator>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
