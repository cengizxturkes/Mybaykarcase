import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getWidthPercentage} from '../../utils/Dimension';
import {Arrow, RightArrow} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/Colors';
import {useDispatch} from 'react-redux';

interface DropdownProps {
  placeholder: string;
  width?: string | number;
  showArrow?: boolean;
  onPress?: () => void;
  type?: any;
  value?: string;
  dispatchEvent?: any;
  data?: any;
  isData?: boolean;
  stateName?: any;
  setType?: any;
  disabled?: boolean;
  disabledPlaceholder?: string;
  payload?: any;
  searchType?: any;
  rightArrow?: boolean;
}

const Dropdown = ({
  placeholder,
  width,
  showArrow,
  onPress,
  type,
  value,
  data,
  isData,
  stateName,
  setType,
  disabled,
  disabledPlaceholder,
  payload,
  searchType,
  rightArrow,
}: DropdownProps) => {
  const navigation = useNavigation();

  console.log('data dorpdown', data);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container(width)}
      activeOpacity={0.8}
      onPress={() =>
        onPress
          ? onPress()
          : navigation.navigate('DropdownSearch', {
              type,
              data,
              isData,
              stateName,
              setType,
              payload,
              searchType,
            })
      }>
      {value ? (
        <Text style={styles.value}>{value}</Text>
      ) : (
        <Text style={styles.placeholder}>
          {disabled ? disabledPlaceholder : placeholder}
        </Text>
      )}
      {showArrow ? rightArrow ? <RightArrow /> : <Arrow /> : null}
    </TouchableOpacity>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: (width: string) => ({
    width: width ? width : '48%',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getWidthPercentage(0.04),
    borderRadius: getWidthPercentage(0.02),
    marginVertical: getWidthPercentage(0.02),
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    height: getWidthPercentage(0.12),
    flexDirection: 'row',
  }),
  placeholder: {
    color: 'gray',
    fontFamily: 'Montserrat-Bold',
    fontSize: getWidthPercentage(0.03),
    textAlign: 'left',
  },
  value: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: getWidthPercentage(0.03),
    textAlign: 'left',
  },
});
