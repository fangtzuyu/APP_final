import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Text } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import Confirm from '../components/Confirm';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    showModal: false,
    token: null,
    status: 'Not Login...'
  };

  
  creatuser = () => {
    this.props.navigation.navigate('CreatScreen');
  }

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('TabScreen');
    } catch (err) {
      this.setState({ showModal: true });
    }
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.setState({ showModal: false });
      this.props.navigation.navigate('TabScreen');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showModal: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title='Sign in'
        textStyle = {{fontSize:18}}
        backgroundColor='#07C69A'
        onPress={this.onSignIn}
      />
    );
  }
  
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={styles.ContainerStyle}>
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
          {this.renderButton()}
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>

      

        <View>
          <Button
            title='New User ?'
            textStyle = {{fontSize:18}}
            onPress={this.creatuser}
          />
        </View>

        <Confirm
          title='Are you sure to create a new user?'
          titleStyle = {{fontSize:20}}
          visible={this.state.showModal}
          onAccept={this.onCreateUser}
          onDecline={this.onCLoseModal}
        />
      </View>
    );
  }
}

const styles = {
  ContainerStyle: {
    flex: 1,
  },
  formStyle: {
    marginTop: 150,
    marginBottom:80,
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
};

export default LoginScreen;