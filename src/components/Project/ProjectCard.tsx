import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {getWidthPercentage} from '../../utils/Dimension';

interface Item {
  projectName: string;
  projectDescription: string;
}

interface Props {
  item: Item;
}

const ProjectCard = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.projectName}>{item.projectName}</Text>
      <Text style={styles.projectDescription}>{item.projectDescription}</Text>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    width: getWidthPercentage(0.9),
    borderRadius: 16,
    padding: getWidthPercentage(0.04),
    gap: getWidthPercentage(0.02),
  },
  projectName: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: getWidthPercentage(0.04),
  },
  projectDescription: {
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
