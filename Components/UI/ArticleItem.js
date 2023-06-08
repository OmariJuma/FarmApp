import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const ArticleItem = () => {
  const handlePress = () => {
    // Handle press event
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Card style={{width:400}}>
        <Card.Title
          style={styles.title}
          title="Title of the Article"
          titleStyle={{fontSize: 20, color: 'black', textAlign: 'center', fontWeight:"bold"}}
        />

        <Image
          source={{uri: 'https://picsum.photos/700'}}
          style={styles.image}
        />

        <Card.Content style={styles.content}>
          <Text style={styles.text}>Content of the article goes here</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 400, //
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 50,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center"
  },
});

export default ArticleItem;
