import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
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
import {ProjectCard} from '../../../components/Project';
import {addProject} from '../../../redux/reducers/Project';

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [addProjectModal, setAddProjectModal] = useState(false);

  const {projectList} = useSelector((state: any) => state.project);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeler</Text>
      <View
        style={{
          width: getWidthPercentage(0.9),
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => setAddProjectModal(true)}
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
            Proje Ekle
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={projectList}
        renderItem={({item}) => <ProjectCard item={item} />}
        keyExtractor={item => item.projectName}
        showsVerticalScrollIndicator={false}
        style={{width: getWidthPercentage(0.9)}}
        ItemSeparatorComponent={() => (
          <View style={{height: getHeightPercentage(0.02)}} />
        )}
      />
      <Modal
        animationType="fade"
        visible={addProjectModal}
        onRequestClose={() => setAddProjectModal(false)}
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
            <Text style={styles.modalTitle}>Proje Ekle</Text>
            <TextBox
              placeholder="Proje Adı"
              width={getWidthPercentage(0.8)}
              onChangeText={text => setProjectName(text)}
              value={projectName}
            />
            <TextBox
              placeholder="Proje Açıklaması"
              width={getWidthPercentage(0.8)}
              onChangeText={text => setProjectDescription(text)}
              value={projectDescription}
              height={getHeightPercentage(0.2)}
              multiline
              textAlingVertical="top"
            />
            <Button
              title="Ekle"
              onPress={() => {
                dispatch(addProject({projectName, projectDescription}));
                setProjectName('');
                setProjectDescription('');
                setAddProjectModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProjectDetails;

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
