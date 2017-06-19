import React from 'react';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Search from './components/Search';
import Details from './components/Details';
import Me from './components/Me';
import Add from './components/Add';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import CreatScreen from './screens/CreatScreen';

export const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: () => ({
        title: '搜尋機構',
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.company.toUpperCase()}`,
        right: (
              <TouchableOpacity
              >
                <FontAwesome name={'heart-o'} size={25} style={{  marginRight: 10,color:'red' }}/>
              </TouchableOpacity>
          ),
      })
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      header: (navigate) => ({
        title: '我的頁面',
      })
    },
  },
  UserScreen: {
        screen: UserScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: '我的資訊',
                right: (
                    <TouchableOpacity
                  onPress={() => navigate('SettingScreen')}
                    >
                      <FontAwesome name={'cog'} size={25} style={{  marginRight: 10 }}/>
                    </TouchableOpacity>
                ),
            })
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: '個人資訊設定',
                
            })
        }
    }
  },
);
export const AddStack = StackNavigator({
  Add: {
    screen: Add,
    navigationOptions: {
      header: () => ({
        title: '增減機構',
      })
    },
  },
  },
);


export const TabRouter = TabNavigator(
  {
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBar: {
          label: '搜尋機構',
          icon: ({ tintColor }) => <FontAwesome name={'cog'} size={30} style={{  color:tintColor }}/>   
                      
                    
        },
      },
    },
    MeStack: {
      screen: MeStack,
      navigationOptions: {
        tabBar: {
          label: '我的頁面',
          icon: ({ tintColor }) => <FontAwesome name={'user'} size={30} style={{  color:tintColor }}/>
        },
      },
    },
    AddStack: {
      screen: AddStack,
      navigationOptions: {
        tabBar: {
          label: '增減機構',
          icon: ({ tintColor }) => <FontAwesome name={'building'} size={25} style={{  color:tintColor }}/>
        },
      },
    },
  },
  {
  tabBarOptions: {
    activeTintColor: '#07C69A',
  },
}
  );

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
      header: () => ({
        title: '登入',
      })
    },
    },
    CreatScreen: {
        screen: CreatScreen,
        navigationOptions: {
      header: () => ({
        title: '建立帳號',
      })
    },
    },
},
);

export const StartStack = StackNavigator({

    Login: {
        screen: LoginStack,
    },
  
    TabScreen: {
        screen: TabRouter,
    },
    UserScreen: {
        screen: UserScreen,
        
    },

},
    {
        headerMode: 'none',
    });