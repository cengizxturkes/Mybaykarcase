import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Storage} from './src/utils/Storage';
import {HomeStack, AuthStack} from './src/stacks';
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_AUTH_STATUS'});
  }, []);

  const {isAuth} = useSelector((state: any) => state.auth);

  return (
    <NavigationContainer>
      {isAuth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
