import React from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import CardSection from './CardSection';

const AddDetail = () => {

  const {
    blankStyle,
    touchStyle,
    textStyle,
    iconStyle,
    singleLine
  } = styles;

      return (
        <Card>
          <CardSection>
          <View>
              <Text style={textStyle}>機構名稱：</Text>

              <TextInput
                placeholder="請輸入機構名稱"
                style={singleLine}
              />

              <Text style={textStyle}>地址：</Text>
             <TextInput
                placeholder="請輸入地址"
                style={singleLine}
              />
              <Text style={textStyle}>電話號碼：</Text>
              <TextInput
                placeholder="請輸入電話號碼"
                style={singleLine}
              />
              <Text style={textStyle}>負責人：</Text>
              <TextInput
                placeholder="請輸入負責人姓名"
                style={singleLine}
              />
              <Text style={textStyle}>環境檢視：</Text>
          </View>
          <TouchableOpacity
              style = {touchStyle}
            >
            <Entypo name="circle-with-plus" size={30} style = {iconStyle} />
          </TouchableOpacity>
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
  singleLine: {
    height: 30,
    width:250,
    margin:5,
    padding:5,backgroundColor:'#dddddd',
    borderRadius:5,
  },
  iconStyle:{
    marginTop: 29,
    marginLeft: 34,
    color: 'black',
  },
  touchStyle :{
    flex: 1,
    borderRadius: 2,
    height: 100,
    width: 100,
    paddingTop: 5,
    marginTop: 10,
    backgroundColor: '#dddddd',
  },
};


// Make the component available to other parts of the app

export default AddDetail;