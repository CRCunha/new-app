import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from '@ui-kitten/components';
import styles from './styles';

const Profile = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Icon size={16} color="#2a2a2c" name="left" type="antdesign" />
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
          style={styles.headerButton}
        ></TouchableOpacity>
      </View>
      <View style={styles.layoutStyle}></View>
    </>
  );
};

export default Profile;
