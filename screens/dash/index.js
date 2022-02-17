import { Avatar, Text } from '@ui-kitten/components';
import { View ,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomBar from '../../components/bottomBar';
import Profile from '../../components/profile';

const styles = StyleSheet.create({
  layoutStyle: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
  },
  header: {
    padding: 20,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  headerButton: {
    padding: 5,
  },
});

const DashScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Icon color="#2a2a2c" name="left" type="antdesign" />
        </TouchableOpacity>
        <Text>Calendar</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Avatar
            size="medium"
            source={{
              uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9',
            }}
          />
        </TouchableOpacity>
      </View>
      {/*<Profile /> */}
      <BottomBar />
    </>
  );
};

export default DashScreen;
