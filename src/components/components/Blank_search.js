import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

class Blank_search extends React.Component {
     constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Entypo name="magnifying-glass" size={25} style = {styles.iconStyle} />
        <TextInput
          style={styles.singleLine}
          placeholder="請輸入機構名稱"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity>
        <Entypo name="circle-with-cross" size={20} style = {styles.iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    backgroundColor:'#dddddd',
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
    flex: 1,
    borderRadius:5,
  },
  iconStyle: {
    padding: 5,
    color: 'black',
  },
});

export default Blank_search;