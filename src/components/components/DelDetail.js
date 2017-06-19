// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';
import CardSection from './CardSection';
import Blank_reason from './Blank_reason';
import Blank_search from './Blank_search';

// Make a component
const DelDetail = () => {

  const { textStyle,} = styles;

      return (
        <Card>
          <CardSection>
          <View>
              <Text style={textStyle}>機構名稱：</Text>
              <Blank_search

              />
              <Text style={textStyle}>理由：</Text>
              <Blank_reason

              />
          </View>
          </CardSection>
          </Card>


    );

};

const styles = {
  textStyle: {
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 20,
    flexDirection: 'column',

  },
};


// Make the component available to other parts of the app

export default DelDetail;