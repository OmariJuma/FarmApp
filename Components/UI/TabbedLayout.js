import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { primaryColor } from './AppBar';
import ArticleItem from './ArticleItem';

const TabbedLayout = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          marginTop: 10,
          paddingTop: 5,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 15,
        }}>
        Pick category to access the articles
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: primaryColor,
          borderBottomWidth: 3,
          marginTop:20
        }}>
        <TouchableOpacity
          onPress={() => handleTabPress('All')}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginRight: 10,
            borderBottomWidth: 3,
            borderBottomColor: activeTab === 'All' ? primaryColor : 'white',
            width: '30%',
          }}>
          <Text style={{color: activeTab === 'All' ? primaryColor : 'black'}}>All articles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabPress('Tab 2')}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 3,
            borderBottomColor: activeTab === 'Tab 2' ? primaryColor : 'white',
            width: '30%',
          }}>
          <Text style={{color:  activeTab === 'Tab 2' ? primaryColor : 'black'}}>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Tab 3')}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 3,
            borderBottomColor: activeTab === 'Tab 3' ? primaryColor : 'white',
            width: '30%',
          }}>
          <Text style={{color: activeTab === 'Tab 3' ? primaryColor :'black'}}>Tab 3</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'All' && (
        <View style={{marginTop: 20}}>
          <Text>All articles are here</Text>
          <ArticleItem/>
        </View>
      )}

      {activeTab === 'Tab 2' && (
        <View style={{marginTop: 20}}>
          <Text>Content for Tab 2</Text>
        </View>
      )}
      {activeTab === 'Tab 3' && (
        <View style={{marginTop: 20}}>
          <Text>Content for Tab 3</Text>
        </View>
      )}
    </View>
  );
};

export default TabbedLayout;
