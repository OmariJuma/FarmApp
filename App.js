import React from 'react';
import {PaperProvider, Drawer, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import AppBar from './Components/UI/AppBar';
import CarouselCards from './Components/UI/CarouselCards';
import {SafeAreaView} from 'react-native-safe-area-context';
function App() {
  const [active, setActive] = React.useState('');

  return (
    <PaperProvider>
      <AppBar />

      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    // alignContent: 'center',
    backgroundColor: '#fff',
    alignItems: "center",
    // justifyContent: 'center',
  },
});

export default App;
