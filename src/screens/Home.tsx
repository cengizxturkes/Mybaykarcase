import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getWidthPercentage} from '../utils/Dimension';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anasayfa</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: getWidthPercentage(0.05),
    fontFamily: 'Montserrat-Bold',
    color: '#202020',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: getWidthPercentage(0.1),
  },
});
