import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
  containerStyle: {
    //borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //borderColor: 'black',
    position: 'relative'
  }
};

export default CardSection;