import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import ItemScreen from './ItemScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = require('../../assets/home.png')

          if (route.name === 'Item')
            iconName = require('../../assets/lightning.png')

          const focusedColor = focused ? '#BFC8AD' : 'inherit'
          return <Image style={{ width: 20, height: 20, backgroundColor: focusedColor, borderRadius: 15 }} source={iconName} />;
        },
        tabBarActiveTintColor: '#BFC8AD',
        tabBarInactiveTintColor: 'black',

        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#7D938A',
          position: 'absolute',
          height: 50,
        },
        tabBarLabelStyle: { paddingBottom: 3, fontSize: 12 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            title: 'Home',
            headerStyle: {
              backgroundColor: '#7D938A',
              height: 60,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              textTransform: 'uppercase',
            },
          }} />
      <Tab.Screen
        name="Item"
        component={ItemScreen}
        options={
          {
            title: 'Item',
            headerStyle: {
              backgroundColor: '#7D938A',
              height: 60,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              textTransform: 'uppercase',
            },
          }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator