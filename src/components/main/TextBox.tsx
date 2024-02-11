import {Dimensions, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';

interface TextBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  maxLength?: number;
  width?: number | string;
  height?: number | string;
  multiline?: boolean;
  textAlingVertical?: 'top' | 'center' | 'bottom';
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

const TextBox = (props: TextBoxProps) => {
  return (
    <TextInput
      keyboardType={props.keyboardType}
      style={styles.container({width: props.width, height: props.height})}
      {...props}
      multiline
      textAlignVertical={props.textAlingVertical}
      placeholderTextColor="gray"
      cursorColor="black"
    />
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: ({width, height}: string) => ({
    borderWidth: 2,
    height: height ? height : getHeightPercentage(0.06),
    borderColor: 'black',
    borderRadius: getWidthPercentage(0.02),
    paddingHorizontal: getWidthPercentage(0.04),
    marginVertical: getWidthPercentage(0.02),
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: getWidthPercentage(0.03),
    width: width ? width : getWidthPercentage(0.9),
  }),
});
