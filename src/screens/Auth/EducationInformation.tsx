import {StyleSheet, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';
import {Button, DropdownButton, TextBox} from '../../components/main';
import {egitimSeviyesi as egitimData} from '../../constants/Data';
import {useDispatch, useSelector} from 'react-redux';
import {EducationActionTypes} from '../../redux/saga/actions/EducationSaga';
import {updateUserData} from '../../redux/reducers/Auth';

const EducationInformation = ({navigation}: any) => {
  const dispatch = useDispatch();

  const {schoolData, egitimSeviyesi, skills} = useSelector(
    (state: any) => state.education,
  );

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Kayıt Ol - 3/4</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <DropdownButton
          placeholder="Eğitim Seviyesi"
          width={getWidthPercentage(0.9)}
          type={EducationActionTypes.SET_EDUACTION_LEVEL}
          showArrow
          data={egitimData}
          value={egitimSeviyesi}
        />
        <DropdownButton
          placeholder="Okul Bilgileri"
          rightArrow
          width={getWidthPercentage(0.9)}
          showArrow
          value={schoolData.length && schoolData.length + ' Okul Eklendi'}
          onPress={() => navigation.navigate('SchoolInformation')}
        />
        <DropdownButton
          placeholder="Yetkinlikler"
          width={getWidthPercentage(0.9)}
          showArrow
          value={skills.length && skills.length + ' Yetkinlik Eklendi'}
          rightArrow
          onPress={() => navigation.navigate('SkillsInformation')}
        />
        {/* <TextBox placeholder='Yetkinlikler'> */}
        <Button
          disabled={
            !egitimSeviyesi.length || !schoolData.length || !skills.length
          }
          title="Devam Et"
          onPress={() => (
            dispatch(
              updateUserData({
                eduLevel: egitimSeviyesi,
                eduInfo: schoolData,
                skills: skills,
              }),
            ),
            navigation.navigate('ProjectInformation')
          )}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EducationInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.05),
    backgroundColor: 'white',
    alignItems: 'center',
    gap: getHeightPercentage(0.04),
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  formContainer: {
    width: getWidthPercentage(0.9),
    justifyContent: 'center',
    alignItems: 'center',
    gap: getHeightPercentage(0.03),
  },
});
