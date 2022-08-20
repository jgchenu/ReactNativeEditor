/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from './src/constants';
import List from './src/containers/List';
import Setting from './src/containers/Setting';
import Doc from './src/containers/Doc';
import {RootStackParamList} from './src/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === ScreenName.List) {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'md-hammer' : 'md-hammer-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={ScreenName.List}
        component={List}
        options={{title: '我的文档'}}
      />

      <Tab.Screen
        name={ScreenName.Setting}
        component={Setting}
        options={{title: '设置'}}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.List}>
        <Stack.Screen
          name={ScreenName.List}
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.Doc}
          component={Doc}
          options={({route}) => ({
            headerBackTitle: '我的文档',
            headerTintColor: 'black',
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   scrollContainer: {
//     backgroundColor: 'white',
//   },
// });

export default App;
