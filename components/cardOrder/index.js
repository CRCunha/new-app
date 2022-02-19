import { Avatar, Text } from '@ui-kitten/components';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import moment from 'moment';

const CardOrder = ({data}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={!data.type ? styles.cardType1 : styles.cardType2}>
        <View style={styles.top}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.descritpion}>{data.descritpion}</Text>
        </View>
        <View style={styles.bot}>
          <View style={styles.avatarContainer}>
            <Avatar
              style={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#fff',
              }}
              source={{ uri: data.avatar }}
            />
          </View>
          <View>
            <Text style={styles.date}>
              {moment(data.createdAt).format('lll')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardAsside}>
        <TouchableOpacity style={styles.buttonAccept}>
          <Text style={{ color: '#fff' }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDecline}>
          <Text style={{ color: '#fff' }}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardOrder;
