import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator, AsyncStorage, PickerIOS,Text } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Confirm from '../components/Confirm';


class CreatScreen extends Component {
  state = {
    email: null,
    password: null,
    phone: null,
    username: null,
    city: null,
    gender: 'male',
    error: ' ',
    loading: false,
    token: null,
    status: 'Not Login...'
  };


  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
        
    const { email, phone, username, city, gender } = this.state;
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      
       console.log('帳戶建立成功');
       const { currentUser } = firebase.auth();
       let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
       console.log('Uid');
     await dbUserid.set({ email, phone, username, city, gender });

      this.props.navigation.navigate('TabScreen');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false
      });
    }
  }

renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <View style={{ marginTop: 10}}>
      <Button
        title='Create'
        textStyle = {{fontSize:18}}
        onPress={this.onCreateUser}
        backgroundColor='#07C69A'
      />
      </View>
    );
  }
  

  render() {
    return (
      <ScrollView>
        <View style={styles.formStyle}>
          <FormLabel><Text style={styles.textStyle}>Email</Text></FormLabel>
          <View style={styles.forminputStyle}>
          <FormInput
            containerStyle={styles.inputContainerStyle}
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          </View>
          <FormLabel><Text style={styles.textStyle}>Password</Text></FormLabel>
          <View style={styles.forminputStyle}>
          <FormInput
              containerStyle={styles.inputContainerStyle}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          </View>
           <FormLabel><Text style={styles.textStyle}>Username</Text></FormLabel>
          <View style={styles.forminputStyle}>
        <FormInput
              containerStyle={styles.inputContainerStyle}
          autoCorrect={false}
          placeholder='John Doe'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
          </View>
        <FormLabel><Text style={styles.textStyle}>Phone</Text></FormLabel>
        <View style={styles.forminputStyle}>
        <FormInput
              containerStyle={styles.inputContainerStyle}
          autoCorrect={false}
          placeholder='555-555-5555'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
          </View>
          <FormLabel><Text style={styles.textStyle}>City</Text></FormLabel>
          <View style={styles.forminputStyle}>
        <FormInput
              containerStyle={styles.inputContainerStyle}
          autoCorrect={false}
          placeholder='Taipei city'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
          </View>

          <View style={{
            flex:1,}}>

        <PickerIOS
            itemStyle={{height:100,marginTop:-10}}
          selectedValue={this.state.gender}
          onValueChange={gender => this.setState({ gender })}
        >
          <PickerIOS.Item 
            label="Male" value="male" />
          <PickerIOS.Item 
            label="Female" value="female" />
        </PickerIOS>
        </View>
          
        </View>
        {this.renderButton()}
      </ScrollView>
    );
  }
}

const styles = {
  formStyle: {
    marginTop:30,
  },
  textStyle: {
    fontSize: 15,
  },
  forminputStyle: {
    alignItems: 'center',
    borderWidth: 0,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  inputContainerStyle: {
    paddingLeft:40,
    paddingRight: 0,
    
  },
  pickerStyle: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 0,
  },
};

export default CreatScreen;