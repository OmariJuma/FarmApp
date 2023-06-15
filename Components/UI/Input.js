import {TouchableOpacity, View} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import paperIcon from './paperIcon.png';
import {primaryColor} from './AppBar';
const Input = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <TextInput
        label="Add a comment..."
        multiline={true}
        numberOfLines={5}
        style={{backgroundColor: '#f2f8f9', flex: 1}}
      />
      <TouchableOpacity>
        <Avatar.Icon
          style={{backgroundColor: primaryColor}}
          icon={paperIcon}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
