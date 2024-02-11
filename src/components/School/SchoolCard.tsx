import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {getWidthPercentage} from '../../utils/Dimension';

interface Item {
  schoolName: string;
  department: string;
  graduationYear: string;
}

interface Props {
  item: Item;
}

const SchoolCard = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.schoolName}>{item.schoolName}</Text>
      <Text style={styles.department}>{item.department}</Text>
      <Text style={styles.graduationYear}>{item.graduationYear}</Text>
    </View>
  );
};

export default SchoolCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    width: getWidthPercentage(0.9),
    borderRadius: 16,
    padding: getWidthPercentage(0.04),
    gap: getWidthPercentage(0.02),
  },
  schoolName: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: getWidthPercentage(0.04),
  },
  department: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: getWidthPercentage(0.033),
  },
  graduationYear: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: getWidthPercentage(0.033),
  },
});
