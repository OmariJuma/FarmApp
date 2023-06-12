import * as React from "react";
import {Button} from 'react-native-paper';
import {Alert, View} from 'react-native';
const Second = ({navigation}) => {
  return (
    <View>
      <Button
        onClick={() => {
          Alert('This is the second screen');
        }}>
        Second
      </Button>
    </View>
  );
};

export default Second;
