import { Avatar, Text } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomBar from '../../components/bottomBar';
import data from './data.json';

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
  textSkills: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
});

const SquareView = (props) => {
  return (
    <Avatar
      style={{
        height: 60,
        width: 60,
        backgroundColor: props.color,
        borderRadius: 60,
        marginRight: 8,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',

        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: props.color,
      }}
      source={{ uri: props.avatar }}
    ></Avatar>
  );
};

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
      <View style={{ paddingLeft: 15, backgroundColor: '#fff' }}>
        <ScrollView
          style={{
            width: '100%',
            backgroundColor: '#fff',
            paddingBottom: 15,
          }}
          horizontal={true}
        >
          {data.map((value) => (
            <SquareView
              color={value.color}
              text="skill 1"
              avatar={value.avatar}
            />
          ))}
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

export default DashScreen;
