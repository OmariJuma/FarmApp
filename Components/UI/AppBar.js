import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Platform, StyleSheet } from "react-native";

const AppBar = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

    return (<Appbar.Header style={styles.container}>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
         <Appbar.Action icon="magnify" onPress={() => {}} />
         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
         <Appbar.Action icon="menu" onPress={()=>{}} />
     </Appbar.Header>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#5BF541"
    }});
  
 
export default AppBar;