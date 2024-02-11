import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import {COLORS} from '../../constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  activeOpacity?: number;
  disabled?: boolean;
}

const {width, height} = Dimensions.get('window');

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={props.activeOpacity || 0.8}
      style={props.disabled ? styles.disable : styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    height: height * 0.06,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 1,
    marginVertical: height * 0.02,
  },
  disable: {
    width: width * 0.6,
    height: height * 0.06,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 1,
    marginVertical: height * 0.02,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});
