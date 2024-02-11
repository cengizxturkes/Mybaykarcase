import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  getHeightPercentage,
  getWidthPercentage,
} from '../../../utils/Dimension';
import {TextBox} from '../../../components/main';
import {COLORS} from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {SkillCard} from '../../../components/Skills';
import {addSkill} from '../../../redux/reducers/Education';

const SkillsInformation = () => {
  const dispatch = useDispatch();
  const [skillName, setSkillText] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<string>('');

  const skillData = useSelector((state: any) => state.education.skills);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yetkinlikler</Text>
      <View>
        <TextBox
          placeholder="Yetkinlik Adı"
          value={skillName}
          onChangeText={text => setSkillText(text)}
        />
        <TextBox
          keyboardType="numeric"
          placeholder="Yetkinlik Seviyesi"
          value={skillLevel}
          onChangeText={text => setSkillLevel(text)}
        />
      </View>
      <View
        style={{
          width: getWidthPercentage(0.9),
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(addSkill({skillName, skillLevel}));
            setSkillText('');
            setSkillLevel('');
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.blue,
            width: getWidthPercentage(0.8),
            height: getHeightPercentage(0.05),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: getWidthPercentage(0.035),
            }}>
            Ekle
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{gap: getHeightPercentage(0.02)}}
        data={skillData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SkillCard item={item} />}
      />
    </View>
  );
};

export default SkillsInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.05),
    backgroundColor: 'white',
    alignItems: 'center',
    gap: getHeightPercentage(0.03),
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
});
