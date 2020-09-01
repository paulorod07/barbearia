import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/barber.svg';

import {Container, LoadingIcon} from './styles';

const Preload = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
      }

      navigate('SignIn');
    }
    checkToken();
  }, [navigate]);

  return (
    <Container>
      <Logo width="100%" height="160" />
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
};

export default Preload;
