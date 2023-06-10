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
          <ArticleItem 
          title="Groundbreaking Discovery: Scientists Uncover Revolutionary Renewable Energy Source"
          category="science"
          date="June 10, 2023"
          author="darren"
          text='In a major scientific breakthrough, a team of researchers from a leading global institute has unveiled a groundbreaking discovery that promises to revolutionize the world of renewable energy. The team, comprised of renowned scientists and engineers, has identified a highly efficient and sustainable energy source that could potentially replace traditional fossil fuels.

          The new energy source, named "EnergiCore," harnesses the power of quantum mechanics to generate electricity. It is based on a novel concept that involves tapping into the fundamental energy of subatomic particles, resulting in a nearly limitless and environmentally friendly energy supply.
          
          Dr. Emily Johnson, the project lead and a pioneer in quantum physics, explains the significance of their findings: "EnergiCore represents a paradigm shift in the field of renewable energy. Unlike solar or wind power, which are dependent on external factors, EnergiCore unlocks the inherent energy potential within matter itself. This discovery has the potential to provide clean, sustainable, and abundant energy for generations to come."
          
          The EnergiCore technology utilizes a compact and scalable device that can be easily integrated into existing power infrastructure. Initial tests have shown remarkable energy conversion rates, surpassing any previously known renewable energy method. Moreover, the process is emission-free, mitigating concerns about greenhouse gas emissions and climate change.'
          />

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
