import React from 'react';
import {PaperProvider, Drawer, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import AppBar from './Components/UI/AppBar';
import CarouselCards from './Components/UI/CarouselCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import Chart from './Components/UI/Chart';
import TabbedLayout from './Components/UI/TabbedLayout';
function App() {
  return (
    <ScrollView>
      <PaperProvider>
        <SafeAreaView>
          <AppBar />
          <View style={styles.container}>
            <CarouselCards />
          </View>
          <TabbedLayout/>
        </SafeAreaView>
        {/* <Chart /> */}
      </PaperProvider>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
