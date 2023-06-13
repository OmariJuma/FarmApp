import * as React from 'react';
import {Button, Text} from 'react-native-paper';
import {Alert, View} from 'react-native';
import {articles} from '../UI/data';
const Second = ({navigation, route}) => {
  var id;

  if(route.params){
    id = route.params.articleId;
  }
  console.log(route);
  return (
    <View>
      {id && <Text>{articles[id].text}</Text>}
      {!id && <Text>Nothing</Text>}
    </View>
  );
};

export default Second;
