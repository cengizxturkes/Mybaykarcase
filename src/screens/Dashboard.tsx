import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getWidthPercentage} from '../utils/Dimension';
import {Storage} from '../utils/Storage';

import {LineChart} from 'react-native-chart-kit';

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    Storage.get('userData').then(res => setUserData(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.dataContainer}>
        <Image
          source={{uri: userData?.image}}
          style={{
            width: getWidthPercentage(0.4),
            height: getWidthPercentage(0.4),
            borderRadius: getWidthPercentage(0.4) / 2,
          }}
        />
        <View style={{gap: 4}}>
          <Text style={styles.text}>
            {userData.name + ' ' + userData.surname}
          </Text>
          <Text style={styles.subText}>
            {userData.city + ' / ' + userData.country}
          </Text>
          <Text style={styles.subText}>{userData.birthDate}</Text>
          <Text style={styles.subText}>{userData.eduLevel}</Text>
        </View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            margin: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Dashboard;

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
  dataContainer: {
    alignItems: 'center',
    gap: getWidthPercentage(0.05),
  },
  text: {
    fontSize: getWidthPercentage(0.05),
    fontFamily: 'Montserrat-Bold',
    color: '#202020',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  subText: {
    fontSize: getWidthPercentage(0.04),
    fontFamily: 'Montserrat-Bold',
    color: '#202020',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  skillText: {
    fontSize: getWidthPercentage(0.04),
    fontFamily: 'Montserrat-Bold',
    color: '#202020',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
