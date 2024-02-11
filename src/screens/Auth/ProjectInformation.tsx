import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';
import {Button, DropdownButton, TextBox} from '../../components/main';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth, updateUserData} from '../../redux/reducers/Auth';
import {Storage} from '../../utils/Storage';

const ProjectInformation = ({navigation}: any) => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleDocumentPicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        presentationStyle: 'overFullScreen',
      });

      setSelectedFile(res);
    } catch (error) {
      console.error(error);
    }
  };

  const {projectList} = useSelector((state: any) => state.project);

  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(updateUserData({projectInfo: projectList}));

    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Kayıt Ol - 4/4</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <DropdownButton
          rightArrow
          value={selectedFile.length ? selectedFile[0].name : 'CV Yükle'}
          onPress={() => handleDocumentPicker()}
          placeholder="CV Yükle"
          width={getWidthPercentage(0.9)}
          showArrow
        />
        <DropdownButton
          value={projectList.length && projectList.length + ' Proje Eklendi'}
          placeholder="Proje Bilgileri"
          width={getWidthPercentage(0.9)}
          onPress={() => navigation.navigate('ProjectDetails')}
          showArrow
          rightArrow
        />
        <Button
          disabled={!selectedFile || !projectList.length}
          title="Tamamla"
          onPress={() => handleRegister()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProjectInformation;

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
