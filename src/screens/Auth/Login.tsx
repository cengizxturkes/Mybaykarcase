import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextBox} from '../../components/main';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {getHeightPercentage} from '../../utils/Dimension';
import {Storage} from '../../utils/Storage';
import {UserActionTypes} from '../../redux/saga/actions/User';

const {width, height} = Dimensions.get('window');

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();

  //12345678945
  const handleLogin = (idNumber: string) => {
    Storage.get('userData').then(res => {
      if (res.idNumber === idNumber) {
        dispatch({type: UserActionTypes.SET_AUTH, payload: true});
        navigation.navigate('Home');
      } else {
        Alert.alert('Hata', 'Kullanıcı bulunamadı');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{idNumber: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <View>
                <TextBox
                  keyboardType="numeric"
                  maxLength={11}
                  placeholder="TC Kimlik No"
                  onChangeText={handleChange('idNumber')}
                  onBlur={() => handleBlur('idNumber')}
                  value={values.idNumber}
                />
              </View>
              <Button
                disabled={!values.idNumber}
                title="Giriş Yap"
                onPress={() => handleLogin(values.idNumber)}
              />
            </>
          )}
        </Formik>
        <Text style={styles.subText}>veya</Text>
        <Button
          title="Kayıt Ol"
          onPress={() => {
            Storage.remove('isAuth');
            Storage.remove('userData');
            navigation.navigate('Register');
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.1),
    alignItems: 'center',
    gap: getHeightPercentage(0.04),
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-ExtraBold',
  },
  formContainer: {
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    gap: getHeightPercentage(0.03),
  },
  subText: {
    fontSize: width * 0.03,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
});
