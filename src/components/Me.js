import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class Me extends Component {

  goToPageTwo = () => {
    this.props.navigation.navigate('UserScreen');
  };
  
  render() {
    return (
      <ScrollView>


         <TouchableOpacity
          style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
               <FontAwesome name={'magic'} size={16} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Color
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name={'bell'} size={16} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Notice
              </Text>
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name={'heart'} size={16} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Followed
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name={'envelope'} size={16} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Contact Us
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name={'question-circle'} size={18} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                FAQ
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => this.goToPageTwo()}>
          <View style={styles.option}>
            <View style={styles.optionIconContainer}>
              <FontAwesome name={'user'} size={18} style={{ width: 20, height: 20, marginTop: 1, marginRight: 3 }}/>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                User info
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionsContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.02)',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});


export default Me;
