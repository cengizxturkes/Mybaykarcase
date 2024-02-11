import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  getHeightPercentage,
  getWidthPercentage,
} from '../../../utils/Dimension';
import {Button, DropdownButton, TextBox} from '../../../components/main';
import {BlurView} from '@react-native-community/blur';
import {COLORS} from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {SchoolCard} from '../../../components/School';
import {addSchoolData} from '../../../redux/reducers/Education';

const SchoolInformation = () => {
  const dispatch = useDispatch();

  const [schoolName, setSchoolName] = useState('');
  const [department, setDepartment] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const [addSchoolModal, setAddSchoolModal] = useState(false);

  const {schoolData} = useSelector((state: any) => state.education);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Okul Bilgileri</Text>
      <View
        style={{
          width: getWidthPercentage(0.9),
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => setAddSchoolModal(true)}
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.blue,
            width: getWidthPercentage(0.3),
            height: getHeightPercentage(0.04),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: getWidthPercentage(0.03),
            }}>
            Okul Ekle
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={schoolData}
        renderItem={({item}) => <SchoolCard item={item} />}
        keyExtractor={item => item.schoolName}
        showsVerticalScrollIndicator={false}
        style={{width: getWidthPercentage(0.9)}}
        ItemSeparatorComponent={() => (
          <View style={{height: getHeightPercentage(0.02)}} />
        )}
      />
      <Modal
        animationType="fade"
        visible={addSchoolModal}
        onRequestClose={() => setAddSchoolModal(false)}
        transparent>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurType="extraDark"
          blurAmount={10}
        />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Okul Ekle</Text>
            <TextBox
              placeholder="Okul Adı"
              width={getWidthPercentage(0.8)}
              onChangeText={text => setSchoolName(text)}
              value={schoolName}
            />
            <TextBox
              placeholder="Bölüm"
              width={getWidthPercentage(0.8)}
              onChangeText={text => setDepartment(text)}
              value={department}
            />
            <TextBox
              placeholder="Mezuniyet Yılı"
              width={getWidthPercentage(0.8)}
              onChangeText={text => setGraduationYear(text)}
              value={graduationYear}
              keyboardType="numeric"
            />
            <Button
              title="Ekle"
              onPress={() => {
                dispatch(
                  addSchoolData({schoolName, department, graduationYear}),
                );
                setSchoolName('');
                setDepartment('');
                setGraduationYear('');
                setAddSchoolModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SchoolInformation;

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
  modalTitle: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: getHeightPercentage(0.02),
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    width: getWidthPercentage(0.9),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
