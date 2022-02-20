import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';

const SquareView = (props) => {
  return (
    <View
      style={{
        height: 40,
        width: 80,
        backgroundColor: props.color,
        borderRadius: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.textSkills}>{props.text}</Text>
    </View>
  );
};

const Skills = () => {
  return (
    <View style={styles.skillsContainer}>
      <Text style={styles.descritpionSkills}>Habilidades</Text>
      <ScrollView horizontal={true}>
        <SquareView color="#90A9FF" text="skill 1" />
        <SquareView color="#CEB0FF" text="skill 2" />
        <SquareView color="#90A9FF" text="skill 3" />
        <SquareView color="#CEB0FF" text="skill 4" />
        <SquareView color="#90A9FF" text="skill 5" />
        <SquareView color="#CEB0FF" text="skill 6" />
      </ScrollView>
    </View>
  );
};

export default Skills;
