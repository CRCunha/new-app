import { Avatar, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import styles from './styles';
import moment from 'moment';

const CardUser = ({data, first, last}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardAsside}>
        {!first ? <View style={styles.cardAssideLine}></View> : null}
        {!first ? (
          <View style={styles.cardAssideUpper}></View>
        ) : (
          <View style={styles.cardAssideUpperFisrt}></View>
        )}

        {last ? (
          <View style={styles.cardAssideLast}></View>
        ) : (
          <View style={styles.cardAssideLine}></View>
        )}
      </View>
      <View style={!data.type ? styles.cardType1 : styles.cardType2}>
        <View style={styles.top}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagTitle}>{!data.type ? 'Low' : 'High'}</Text>
          </View>
        </View>
        <View style={styles.bot}>
          <View style={styles.avatarContainer}>
            <Avatar source={{ uri: data.avatar }} />
            <Avatar
              style={{ marginLeft: -15 }}
              source={{ uri: data.avatar2 }}
            />
          </View>
          <View>
            <Text style={styles.date}>
              {moment(data.createdAt).format('lll')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardUser;
