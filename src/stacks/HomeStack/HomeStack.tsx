import React from 'react';
import {homeRoutes} from '../../Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '../../assets/icons';
import {getWidthPercentage} from '../../utils/Dimension';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-SemiBold',
          fontSize: getWidthPercentage(0.025),
        },
        tabBarActiveTintColor: '#202020',
        tabBarInactiveTintColor: 'gray',
      }}>
      {homeRoutes.map((route, index) => (
        <Tab.Screen
          key={index}
          {...route}
          options={{
            tabBarIcon: ({focused}) => <route.iconName focused={focused} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeStack;
