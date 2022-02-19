import { Avatar, Text } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomBar from '../../components/bottomBar';

const styles = StyleSheet.create({
  layoutStyle: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
  },
  header: {
    paddingBottom: 10,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  headerButton: {
    width: 50,
    padding: 8,
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
          <Icon size={16} color="#2a2a2c" name="left" type="antdesign" />
        </TouchableOpacity>
        <Text>Agenda</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.headerButton}
        >
          <Avatar
            size="small"
            source={{
              uri: 'https://forums.techguy.org/proxy.php?image=https%3A%2F%2Ffirefoxusercontent.com%2F00000000000000000000000000000000&hash=ab82de118db266fad1a6b77a8cc8539d',
            }}
          />
        </TouchableOpacity>
      </View>
      <BottomBar />
    </>
  );
};

export default DashScreen;
