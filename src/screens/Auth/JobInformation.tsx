import {StyleSheet, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';
import {Button, DropdownButton, TextBox} from '../../components/main';
import {
  calismaDurumu as calismaData,
  meslekListesi,
} from '../../constants/Data';
import {useDispatch, useSelector} from 'react-redux';
import {JobActionTypes} from '../../redux/saga/actions/JobSaga';
import {updateUserData} from '../../redux/reducers/Auth';

const JobInformation = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {selectedJob, jobStatus} = useSelector((state: any) => state.job);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Kayıt Ol - 2/4</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <DropdownButton
          placeholder="Çalışma Durumu"
          width={getWidthPercentage(0.9)}
          showArrow
          data={calismaData}
          value={jobStatus}
          type={JobActionTypes.SET_CALISMA_DURUMU}
        />
        <DropdownButton
          placeholder="Meslek"
          width={getWidthPercentage(0.9)}
          showArrow
          data={meslekListesi}
          value={selectedJob}
          setType={JobActionTypes.SET_JOB}
        />
        <Button
          disabled={!jobStatus.length || !selectedJob.length}
          title="Devam Et"
          onPress={() => {
            dispatch(updateUserData({jobStatus: jobStatus, job: selectedJob}));
            navigation.navigate('EducationInformation');
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JobInformation;

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
