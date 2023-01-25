import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import Modal from 'react-native-modal';

function TabScreenModal({modalVisible, setModalVisible}) {
  return (
    <Modal
      animationIn="bounce"
      isVisible={modalVisible}
      onBackButtonPress={() => {
        setModalVisible(!modalVisible);
      }}
      backdropOpacity={0.4}>
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.emptyView} />
        <View style={styles.modalWrapper}>
          <Pressable onPress={() => {}}>
            <View style={styles.modalView}>
              <Pressable onPress={() => {}}>
                <Text style={styles.modalText}>카메라</Text>
              </Pressable>
              <Pressable onPress={() => {}}>
                <Text style={styles.modalText}>사진첩에서 선택</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>취소</Text>
              </Pressable>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  emptyView: {flex: 1.5, backgroundColor: 'skyblue'},
  modalWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: 330,
    opacity: 0.85,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {padding: 5},
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {},
  textStyle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TabScreenModal;
