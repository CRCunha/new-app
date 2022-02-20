import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Avatar } from '@ui-kitten/components';
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
        <Text>Perfil</Text>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
          style={styles.headerButton}
        >
          <Icon size={16} color="#2a2a2c" name="more-vertical" type="feather" />
        </TouchableOpacity>
      </View>
      <View style={styles.layoutStyle}>
        <View style={styles.ProfileHeader}>
          <Avatar
            style={styles.avatar}
            size="giant"
            source={{
              uri: 'https://forums.techguy.org/proxy.php?image=https%3A%2F%2Ffirefoxusercontent.com%2F00000000000000000000000000000000&hash=ab82de118db266fad1a6b77a8cc8539d',
            }}
          />
          <View style={styles.perfilInfos}>
            <Text style={styles.name}>User Name</Text>
            <Text style={styles.descritpion}>User Description</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
