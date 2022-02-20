import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Icon } from 'react-native-elements';

import styles from './styles';


const Account = () => {
  return (
    <View style={styles.dashContainer}>
      <Text style={styles.descritpionDash}>Dashboard</Text>
    </View>
  );
};

export default Account;
