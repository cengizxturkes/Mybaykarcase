import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {getWidthPercentage} from '../../utils/Dimension';

interface Item {
  skillName: string;
  skillLevel: string;
}

interface Props {
  item: Item;
}

const SkillCard = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>{item.skillName}</Text>
      <Text style={styles.skillLevel}>{item.skillLevel}</Text>
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    width: getWidthPercentage(0.9),
    borderRadius: 16,
    padding: getWidthPercentage(0.04),
    gap: getWidthPercentage(0.02),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillName: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: getWidthPercentage(0.04),
  },
  skillLevel: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: getWidthPercentage(0.033),
  },
});
