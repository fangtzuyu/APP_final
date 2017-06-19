import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, TouchableHighlight, Alert, Linking } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import Dimensions from 'Dimensions';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

const Details = (props) => {
  const { company,
          city,
          district,
          address,
          phone,
          person,
          check
  } = props.navigation.state.params;

  const { boldFont, item, title, follow, followbtn, maptitle, icon, delbtn } = styles;

  return (
    <ScrollView >
      <Swiper style={styles.wrapper} showsButtons={false} height={height/3} >
        <View style={styles.slide1}>
          <Text style={styles.text}>img1</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>img2</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>img3</Text>
        </View>
      </Swiper>

      <Card>
        <View style={[item]}>
        <Text style={[boldFont]}>{company}</Text>
        </View>

      
        <View style={[item]}>
          <View style={[item,title]}>
            <FontAwesome name={'home'} size={25} style={{color:'#02281b' }}/>
            <Text style={{color:'#02281b'}}>  {address}</Text>
          </View>

        <View style={[item]}>
          <TouchableOpacity
          onPress={() => Linking.openURL(`https://www.google.com/maps/place/${address}`)}
          >
          <View style={[follow, maptitle]}>
            <FontAwesome name={'map-marker'} size={16} style={[icon]}/>
            <Text style={{color:'#03A9F4'}}> 在Google Map打開 ></Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>


        <View style={[item]}>
          <View style={[item,title]}>
            <FontAwesome name={'phone'} size={25} style={{color:'#02281b' }}/>
            <Text style={{fontSize:15,color:'#02281b'}}>   {phone}   {person}</Text>
          </View>

          <View style={[item]}>
            <TouchableOpacity
            onPress={() => Linking.openURL(`tel: $${phone}`)}
            >
              <View style={[follow, maptitle]}>
                <FontAwesome name={'phone'} size={20} style={[icon]}/>
                <Text style={{color:'#03A9F4'}}>直接撥打 ></Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


         <TouchableHighlight  style={[followbtn]}
          onPress={() => Alert.alert(
            'Alert',
           '確定送出此訊息?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}
        >
              <View style={[follow,delbtn]}>
                <FontAwesome name={'trash'} size={20} color={'#fff'}/>
                <Text style={{color:'#fff',margin:5 ,fontSize:15}}>此機構已不存在</Text>
              </View>

          </TouchableHighlight>
      </Card>
      <View  style={{paddingBottom:20}}></View>

    </ScrollView>
  );
};


const styles = {
  boldFont: {
    //fontWeight: 'bold',
    fontSize:18,
    flex:6 ,color:'#02281b'
  },
  item: {
    marginBottom:10
  },
  title: {
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'space-between'
  },
  maptitle: {
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  delbtn: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  followbtn: {
    backgroundColor: '#07C69A',
    justifyContent:'center'
  },
  follow: {
    margin:5,
  },
  icon: {
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
    color:'white'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
};
export default Details;