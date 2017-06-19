import React, { Component } from 'react';
import { View, PickerIOS, ActivityIndicator,Text, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';


class SettingScreen extends Component {
  state = {
    email: null,
    phone: null,
    username: null,
    city: null,
    gender: 'male',
    saving: false
  };



  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;

      this.setState({ username, email, city, phone, gender });
    } catch (err) { }
  }
  
  

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ email, phone, username, city, gender });
    this.setState({ saving: false });
   
    //this.props.navigation.navigate('UserScreen');
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <View style={{ marginTop: 20 }}>
      <Button
        title='Save Setting'
        textStyle = {{fontSize:18}}
        onPress={this.onSaveInfo}
      />
      </View>
    );
    
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
      <View style={styles.formStyle}>
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
        {this.renderButton()}
      </View>
      </ScrollView>
    );
  }
}

const styles = {
  formStyle: {
    marginTop:20,
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

export default SettingScreen;
