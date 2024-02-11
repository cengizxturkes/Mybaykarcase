import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from '../../Routes';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {authRoutes.map((route, index) => (
        <Stack.Screen
          options={{
            animation:
              route.name === 'DropdownSearch'
                ? 'slide_from_bottom'
                : 'slide_from_right',
          }}
          key={index}
          {...route}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
