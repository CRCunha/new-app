import { Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    height: '70%',
  },
  logo: {
    width: 66,
    height: 58,
  },
  layout: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
  },
  texty: {
    fontWeight: 'bold',
    fontSize: 45,
    color: '#2a2a2c',
    marginBottom: -30,
  },
  button: {
    backgroundColor: '#2a2a2c',
    width: '45%',
    height: 45,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    color: '#fff',
  },
});

const SplashScreen = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1" style={styles.texty}>
        Manege time more effectively
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pinimg.com/originals/dd/3b/28/dd3b283e47743f60d0a2233523cd918d.png',
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Dash')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next </Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default SplashScreen;
