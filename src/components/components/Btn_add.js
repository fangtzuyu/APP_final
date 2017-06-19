import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements';

import CardSection from './CardSection';

var alertMessage = '確定送出此訊息？';

const onButtonPress = (style = {wrapper}) => {
  Alert.alert(
            'Alert',
            alertMessage,
            [
              {text: 'No', onPress: () => console.log('No Pressed!')},
              {text: 'Yes', onPress: () => console.log('Yes Pressed!')},
            ]
          );
};

const Btn_add = () => {

const {btnStyle} = styles;

     return (
      <CardSection>
       <View style = {btnStyle}>
        <Button
          onPress={onButtonPress}
          title="新增完成"
              backgroundColor='#07C69A'
          accessibilityLabel="Added Complete"
        />
        </View>
        </CardSection>

      );

};

const styles = {
  btnStyle: {
    marginTop: 20,
    flex: 1,
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
};

export default Btn_add;