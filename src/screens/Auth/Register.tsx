import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';
import {Formik} from 'formik';
import {Button, DropdownButton, TextBox} from '../../components/main';
import {launchImageLibrary} from 'react-native-image-picker';
import {AddImage} from '../../assets/icons';
import DatePicker from 'react-native-date-picker';
import {registerSchema} from '../../utils/validation/registerSchema';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedCountry} from '../../redux/reducers/Country';
import {CountryActionTypes} from '../../redux/saga/actions/CountrySaga';
import {setUserData, updateUserData} from '../../redux/reducers/Auth';
import {UserActionTypes} from '../../redux/saga/actions/User';

const Register = ({navigation}: any) => {
  const [date, setDate] = useState('');
  const [show, setShow] = useState(false);

  const [imageUri, setImageUri] = useState('');

  const dispatch = useDispatch();

  const selectedCountry = useSelector(
    (state: any) => state.country.selectedCountry,
  );
  const selectedCity = useSelector((state: any) => state.country.selectedCity);

  const countryList = useSelector((state: any) => state.country.countryList);
  const cityList = useSelector((state: any) => state.country.cityList);

  const initialValues = {
    name: '',
    surname: '',
    idNumber: '',
    phoneNumber: '',
    gender: '',
  };

  const {gender} = useSelector((state: any) => state.auth);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#083973' }}>

    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

     <Text style={[styles.title, ]}>Kayıt Ol - 1/4</Text>
     </TouchableOpacity>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.selectImage}
                  onPress={() =>
                    launchImageLibrary({mediaType: 'photo',marginTop: getHeightPercentage(0.0)}, (image: any) => {
                      image.assets[0] && setImageUri(image.assets[0].uri);
                    })
                  }>
                  {imageUri ? (
                    <Image
                      source={{uri: imageUri}}
                      style={{width: 140, height: 140, borderRadius: 140}}
                    />
                  ) : (
                    <AddImage />
                  )}
                </TouchableOpacity>
                <TextBox
                  style={[styles.textBox]}
                  
                  placeholder="Ad"
                  onChangeText={handleChange('name')}
                  value={values.name}
                />
                <TextBox
                  placeholder="Soyad"
                  style={[styles.textBox]}

                  onChangeText={handleChange('surname')}
                  value={values.surname}
                />
                <View
                  style={{
                    width: getWidthPercentage(0.9),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <DropdownButton

                    placeholder="Ülke"
                    showArrow
                    stateName={['country', 'countryList', 'loading']}
                    data={countryList}
                    type={CountryActionTypes.GET_COUNTRY}
                    setType={CountryActionTypes.SET_SELECTED_COUNTRY}
                    value={selectedCountry}
                    isData
                    searchType={CountryActionTypes.SEARCH_COUNTRY}
                  />
                  <DropdownButton
                    style={[styles.textBox, styles.dropdownButton]} 

                    disabled={!selectedCountry}
                    disabledPlaceholder="Önce Ülke Seçiniz"
                    placeholder="Şehir"
                    showArrow
                    data={cityList}
                    stateName={['country', 'cityList', 'loading']}
                    type={CountryActionTypes.GET_CITIES}
                    setType={CountryActionTypes.SET_SELECTED_CITY}
                    value={selectedCity}
                    isData
                    payload={selectedCountry}
                    searchType={CountryActionTypes.SEARCH_CITY}
                  />
                </View>
                <TextBox
                  style={[styles.textBox]}

                  maxLength={11}
                  keyboardType="number-pad"
                  placeholder="T.C Kimlik Numarası"
                  onChangeText={handleChange('idNumber')}
                  onBlur={() => handleBlur('idNumber')}
                  value={values.idNumber}
                />
                <TextBox
                  style={[styles.textBox]}

                  maxLength={11}
                  keyboardType="number-pad"
                  placeholder="Telefon Numarası"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={() => handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
                <DropdownButton
                  style={[styles.textBox]}

                  placeholder="Doğum Tarihi"
                  width={getWidthPercentage(0.9)}
                  value={date ? new Date(date).toLocaleDateString() : ''}
                  showArrow
                  rightArrow
                  onPress={() => setShow(true)}
                />
                <DatePicker
                  open={show}
                  mode="date"
                  modal
                  date={date ? new Date(date) : new Date()}
                  onConfirm={date => {
                    setDate(date);
                    setShow(false);
                  }}
                  onCancel={() => setShow(false)}
                />
                <DropdownButton
                  placeholder="Cinsiyet"
                  showArrow
                  value={gender}
                  setType={UserActionTypes.SET_GENGER}
                  data={['Erkek', 'Kadın']}
                  width={getWidthPercentage(0.9)}
                />
                <Button
                  title="Devam Et"
                  disabled={
                    !imageUri ||
                    !date ||
                    !selectedCity ||
                    !selectedCountry ||
                    !values.name ||
                    !values.surname ||
                    !values.idNumber ||
                    !values.phoneNumber ||
                    !gender
                  }
                  onPress={() => {
                    dispatch(
                      updateUserData({
                        image: imageUri,
                        name: values.name,
                        surname: values.surname,
                        country: selectedCountry,
                        city: selectedCity,
                        idNumber: values.idNumber,
                        phoneNumber: values.phoneNumber,
                        birthDate: new Date(date).toLocaleDateString(),
                      }),
                    );
                    dispatch({
                      type: CountryActionTypes.SET_SELECTED_COUNTRY,
                      payload: '',
                    });
                    dispatch({
                      type: CountryActionTypes.SET_SELECTED_CITY,
                      payload: '',
                    });
                    dispatch({
                      type: UserActionTypes.SET_GENGER,
                      payload: '',
                    });
                    navigation.navigate('JobInformation');
                  }}
                />
              </View>
            </>
          )}
        </Formik>

      </ScrollView>

    </KeyboardAvoidingView>
    </SafeAreaView>

  );
};

export default Register;

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderColor: 'gray',
    resizeMode: 'contain',
    borderWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 16,
  },
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.05),
    backgroundColor:"#083973",
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
  subText: {
    fontSize: getWidthPercentage(0.03),
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  selectImage: {
    width: 140,
    height: 140,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140,
  },
 
});
