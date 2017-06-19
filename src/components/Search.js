import Expo from 'expo';
import React ,{ Component }from 'react';
import { StyleSheet, Text, ScrollView, SegmentedControlIOS, View, TouchableOpacity, PickerIOS, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import albums from '../json/albums.json';
import Dimensions from 'Dimensions';
import { Icon, CheckBox } from 'react-native-elements';

const PickerItemIOS =PickerIOS.Item

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const items = albums;

const  CAR_MAKES_AND_MODELS = {
    abc:{
      name:'請選擇縣市',
      models:['請選擇鄉鎮市區'],
    },
    amc: {
      name: '新北市',
      models: ['新店區', '淡水區', '深坑區', '八里區', '三芝區', '三重區', '三峽區', '土城區', '中和區', '五股區', '永和區', ' 汐止區', '板橋區', '林口區', '泰山區', '新莊區', '瑞芳區', '萬里區', '樹林區', '蘆洲區', '鶯歌區'],
    },
    alfa: {
      name: '臺北市',
      models: ['士林區', '大同區', '大安區', '中山區', '內湖區', '文山區', '北投區', '松山區', '信義區', '南港區', '萬華區'],
    },
    aston: {
      name: '基隆市',
      models: ['七堵區', '安樂區', '中正區', '仁愛區', '信義區', '暖暖區'],
    },
    audi: {
      name: '桃園市',
      models: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '大溪區', '蘆竹區', '大園區', '龜山區', '龍潭區', '新屋區'],
    },
    austin: {
      name: '新竹市',
      models: ['北區', '東區', '香山區'],
    },
    borgward: {
      name: '新竹縣',
      models: ['竹北市', '新豐鄉', '竹東鎮', '關西鎮', '芎林鄉', '湖口鄉', '新埔鎮',],
    },
    buick: {
      name: '苗栗縣',
      models: ['苗栗市', '通宵鎮', '苑裡鎮', '頭份鎮', '南庄鄉', '竹南鎮'],
    },
    cadillac: {
      name: '南投縣',
      models: ['名間鄉', '竹山鎮', '南投市', '埔里鎮', '草屯鎮'],
    },
    chevrolet: {
      name: '臺中市',
      models: ['大甲區', '大里區', '大雅區', '中區', '北屯區', '北區', '外埔區', '后里區', '西屯區', '西區', '沙鹿區', '東區', '東勢區', '南屯區', '南區', '烏日區', '神岡區', '梧棲區', '潭子區', '龍井區', '豐原區', '霧峰區'],
    },
  changhua: {
      name: '彰化縣',
      models: ['二林鎮', '北斗鎮', '永靖鄉', '田中鎮', '田尾鄉', '伸港鄉', '秀水鄉', '和美鎮', '社頭鄉', '芬園鄉', '花壇鄉', '員林鎮', '埔心鄉', '埔鹽鄉', '埤頭鄉', '溪州鄉', '溪湖鎮', '彰化市', '福興鄉'],
    },
  aa: {
      name: '雲林縣',
      models: ['二崙鄉', '土庫鎮', '大埤鄉', '元長鄉', '斗六市', '斗南鎮', '北港鎮', '古坑鄉', '西螺鎮', '林內鄉', '虎尾鎮', '崙背鄉', '褒忠鄉', '元長鄉'],
    },
  bb: {
      name: '嘉義市',
      models: ['西區', '東區'],
    },
  chiaye: {
      name: '嘉義縣',
      models: ['義竹鄉', '溪口鄉', '番路鄉', '東石鄉', '竹崎鄉', '朴子市', '民雄鄉', '太保市', '中埔鄉', '大林鎮'],
    },
  tainan: {
      name: '臺南市',
      models: ['中西區', '東區', '南區', '北區', '安平區', '安南區', '新營區', '鹽水區', '麻豆區', '佳里區', '新化區', '善化區', '學甲區', '後壁區', '東山區', '下營區', '官田區', '大內區', '西港區', '將軍區', '仁德區', '歸仁區', '關廟區', '永康區'],
    },
  kao: {
      name: '高雄市',
      models: ['三民區', '大寮區', '大樹區', '小港區', '仁武區', '內門區', '左營區', '岡山區', '林園區', '阿蓮區', '前金區', '美濃區', '苓雅區', '鳥松區', '湖內區', '新興區', '楠梓區', '路竹區', '鼓山區', '旗山區', '鳳山區', '橋頭區', '燕巢區'],
    },
  ping: {
      name: '屏東縣',
      models: ['九如鄉', '三地門鄉', '內埔鄉', '竹田鄉', '里港鄉', '佳冬鄉', '東港鎮', '枋寮鄉', '長治鄉', '屏東市', '恆春鎮', '春日鄉', '崁頂鄉', '高樹鄉', '新埤鄉', '新園鄉', '萬丹鄉', '萬巒鄉', '潮州鎮', '鹽埔鄉'],
    },
  taitoung: {
      name: '臺東縣',
      models: ['臺東市', '卑南鄉', '關山鎮', '太麻里'],
    },
  hualen: {
      name: '花蓮縣',
      models: ['玉里鎮', '吉安鄉', '秀林鄉', '花蓮市', '新城鄉', '壽豐鄉'],
    },
  yelen: {
      name: '宜蘭縣',
      models: ['三星鄉', '五結鄉', '冬山鄉', '宜蘭市', '南澳鄉', '員山鄉', '礁溪鄉', '羅東鎮', '頭城鎮'],
    },
  island1: {
      name: '澎湖縣',
      models: ['馬公市', '白沙鄉'],
    },
  island2: {
      name: '金門縣',
      models: ['金城鎮', '金湖鎮'],
    },

  island3: {
      name: '連江縣',
      models: ['南竿鄉'],
    },
};

class Search extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      items,
      newitems:[],
      carMake: 'abc',
      modelIndex: 0,
      text:[],
      values: ['地區檢索','機構名稱查詢'],
      value: '地區檢索'
    };
    this.picker = this.picker.bind(this);
  }

_onValueChange = (value) => {
    this.setState({
      value: value,
    });
    this.state.newitems.length=0;
    this.setState({carMake:'abc', modelIndex: 0})
};

renderListView = (val) => {
  if (val === '機構名稱查詢') {
      return (

          <View style = {styles.search_box}>
              <Entypo name="magnifying-glass" size={20} color="#043a27" 
                      style = {styles.search_icon}  />
              <TextInput
                placeholder="請輸入欲查詢機構名稱"
                style={styles.text_input}
                onChangeText={(text) => {
                  this.setState({text});
                  this.textsearch(text)
                }}
              clearButtonMode="always"
              />
          </View>
        )
  } else if (val  === '地區檢索') {
      return (
         <View style={styles.droplist}>
           <View style={{flex:1 }}>
            <PickerIOS
            itemStyle={{fontSize:18,height:120,color:'#043a27'}}
              selectedValue={this.state.carMake}
              onValueChange={(carMake) => {this.setState({carMake, modelIndex: 0});this.picker(carMake,0)}}
              >
              {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                <PickerItemIOS
                  
                  key={carMake}
                  value={carMake}
                  label={CAR_MAKES_AND_MODELS[carMake].name}
                />
              ))}
            </PickerIOS>
           </View>

          <View style={{flex:1 }}>
            <PickerIOS
            itemStyle={{fontSize:18,height:120,color:'#043a27'}}
              key={this.state.carMake}
              selectedValue={this.state.modelIndex}
              onValueChange={(carMake,modelIndex) => {this.setState({modelIndex});this.picker(this.state.carMake,modelIndex)}}>
              {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
                <PickerItemIOS
                  key={this.state.carMake + '_' + modelIndex}
                  value={modelIndex}
                  label={modelName}
                />
                ))}
            </PickerIOS>
          </View>
        </View>   
      )
    }
};
 
textsearch(text){
  var reitem;
  var i=0;
  if(text){
    items.map((item)=>{
      reitem = { ...item }.company.indexOf(text);
      if(reitem != -1){
          this.state.newitems[i] =item;
          i++;
      } else{
          this.state.newitems.splice(i,1);
        }
    });
  } else{
      this.state.newitems.length=0;
  }
    this.setState(this.state.newitems);
}

picker( key,value ){
      var i=0;
    items.map((item) => {
      if({ ...item }.city === CAR_MAKES_AND_MODELS[key].name){
        if({ ...item }.district === CAR_MAKES_AND_MODELS[key].models[value]){
        this.state.newitems[i] =item;
        i++;
        }
      } else{
        this.state.newitems.splice(i,1);
      }
    });
     //console.log(this.state.newitems);
    this.setState(this.state.newitems);
}

result(){
  if(this.state.newitems[0]==null){
    return "查無結果"
  } else{
    return "結果如下"
  }
}

goToPageTwo = (result) => {
    this.props.navigation.navigate('Details', { ...result });
};

  render() {
    return (
      <ScrollView>
         <View style={styles.container}>

          <View>
            <View style = {styles.control}>
              <SegmentedControlIOS
                values={this.state.values}
                value={this.state.value}
                selectedIndex={0}
                tintColor={'#07C69A'}
                onValueChange={this._onValueChange} />
            </View>
                {this.renderListView(this.state.value)}

              <View style={{flex:1  }}>
                <Text style={{margin:10,color:'#043a27'}}>{this.result()}：</Text>
                {
                  this.state.newitems.map((result,i) => {
                    return (
                      <TouchableOpacity
                      style={styles.selection}
                      key={i}
                      onPress={() => this.goToPageTwo(result)}
                      >
                    <Text style={{color:'#02281b'}}>
                        {{ ...result }.company}
                      </Text>
                      <Text style={{color:'#02281b'}}>
                        {{ ...result }.phone}
                      </Text>
                      </TouchableOpacity>
                    );
                  })
                }
              </View>

          </View>

      </View>
      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  
  control: {
    marginTop:15,
    marginRight:50,
    marginLeft:50
  },
  container: {
    flex: 1,
    //backgroundColor:'#BCF2DF'
    //alignItems: 'center',
  },
  search_box: { 
    flexDirection:'row',
    width:width-20,
    height:40,
    backgroundColor:'#dddddd',
    borderRadius:5,
    margin:10,
  },
  
  search_icon:{
    margin:10,
    marginLeft:5,
    marginRight:5,
    justifyContent:'flex-start',
  },
  text_input:{
    height: 30,
    width:width-60,
    margin:5,
  },

  droplist: { 
    flexDirection:'row',
    width:width-10,
  },
  selection:{
    flex: 1,
    backgroundColor:'#dddddd',
    margin:2,
    padding:5
  },
});

export default Search;