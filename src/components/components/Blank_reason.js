import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, } from 'react-native';

class Blank_reason extends React.Component {
     constructor(props) {
    super(props);
    this.state = { text: '', height: 200, };
  }

  render() {
    return (
      <View>
        <TextInput
          multiline = {true}
          style={[styles.singleLine, {height: Math.max(35, this.state.height)}]}
          placeholder="請輸入原因"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid = "white"
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  singleLine: {
    fontSize: 16,
    padding: 4,
    backgroundColor: '#dddddd',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});
// App registration and rendering
export default Blank_reason;