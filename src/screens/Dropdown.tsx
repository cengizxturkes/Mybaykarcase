import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextBox} from '../components/main';
import {getHeightPercentage, getWidthPercentage} from '../utils/Dimension';
import {COLORS} from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';

const Dropdown = ({route, navigation}: any) => {
  const {type, data, isData, stateName, setType, payload, searchType} =
    route.params;
  const [text, setText] = useState('');

  const state = stateName
    ? useSelector((state: any) => state[stateName[0]][stateName[1]])
    : data;

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    isData && dispatch({type: type, payload: {payload, skip}});
  }, [skip]);

  const dispatch = useDispatch();

  const loading = stateName
    ? useSelector((state: any) => state[stateName[0]].loading)
    : false;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ara</Text>
      <TextBox
        placeholder="Ara"
        width={getWidthPercentage(0.9)}
        onChangeText={text => {
          setText(text);
          dispatch({type: searchType, payload: {searchText: text, skip}});
        }}
        value={text}
      />
      <FlatList
        contentContainerStyle={{gap: 10}}
        data={state}
        ListFooterComponent={() => (
          <View style={{height: getHeightPercentage(0.1)}}>
            {loading && <ActivityIndicator size="large" color={COLORS.blue} />}
          </View>
        )}
        renderItem={({item, index}: any) => (
          <TouchableOpacity
            key={index}
            style={styles.button(index)}
            onPress={() => {
              dispatch({type: setType ? setType : type, payload: item});
              navigation.goBack();
            }}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        onEndReached={() => {
          setSkip(skip + 10);
        }}
        onEndReachedThreshold={0.3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: getWidthPercentage(0.02),
  },
  title: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: getWidthPercentage(0.05),
    marginVertical: getWidthPercentage(0.02),
  },
  button: (index: number) => ({
    width: getWidthPercentage(0.9),
    padding: getWidthPercentage(0.032),
    borderRadius: 10,
    backgroundColor: index % 2 == 0 ? '#E4E4E4' : '#D1D1D1',
  }),
  itemText: {
    fontSize: getWidthPercentage(0.0309),
    fontFamily: 'Montserrat-Bold',
    color: COLORS.black,
  },
});
