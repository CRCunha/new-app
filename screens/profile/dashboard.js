import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Icon } from 'react-native-elements';

import styles from './styles';


const Skills = () => {
  return (
    <View style={styles.dashContainer}>
      <Text style={styles.descritpionDash}>Dashboard</Text>
      <View style={styles.dashContainerItems}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Icon size={16} color="#FFF" name="credit-card" type="feather" />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>Payments</Text>
            <View style={styles.itemTextTagContainer}>
              <Text style={styles.itemTextTag}>2 New</Text>
              <Icon
                style={{ marginLeft: 5, marginTop: 2.5 }}
                size={16}
                color="#FFF"
                name="right"
                type="antdesign"
              />
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Icon size={16} color="#FFF" name="award" type="feather" />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>Achievments</Text>
            <View style={styles.itemTextTagContainerAchiv}>
              <Text style={styles.itemTextTag}>3 all</Text>
              <Icon
                style={{ marginLeft: 5, marginTop: 2.5 }}
                size={16}
                color="#FFF"
                name="right"
                type="antdesign"
              />
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Icon size={16} color="#FFF" name="check-circle" type="feather" />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>Privacy</Text>
            <View sty style={styles.itemTextTagContainerPrivacity}>
              <Text style={styles.itemTextTag}>Actions</Text>
              <Icon
                style={{ marginLeft: 5, marginTop: 2.5 }}
                size={16}
                color="#FFF"
                name="right"
                type="antdesign"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Skills;
