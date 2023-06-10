import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import { primaryColor } from './AppBar';

const ArticleItem = (props) => {
  const handlePress = () => {
    // Handle press event
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://picsum.photos/700'}}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{color:"grey", marginLeft:20, backgroundColor:primaryColor, borderTopRightRadius:20}}>Category: {props.category}</Text>
          <Card.Title
            title={props.title}
            titleStyle={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          />
          <Card.Content>
            <Text style={styles.text}>
              {`${props.text}`.slice(
                0,
                30,
              )}
              ...
            </Text>
            <View style={{marginTop: 20}}>
              <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
                <Avatar.Icon
                  icon="account-circle"
                  size={30}
                  color="grey"
                  style={{backgroundColor: 'white'}}
                />
                <Text style={styles.adtnlText}>Author: {props.author}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
                <Avatar.Icon
                  icon="clock"
                  size={30}
                  color="grey"
                  style={{backgroundColor: 'white'}}
                />
                <Text style={styles.adtnlText}>Posted: {props.date}</Text>
              </View>
            </View>
          </Card.Content>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    // backgroundColor:"grey",
    borderRadius: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  imageContainer: {
    width: '40%',
    // paddingRight: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  adtnlText: {
    color: 'grey',
  },
});

export default ArticleItem;