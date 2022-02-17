import React, { useState, useEffect } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, ScrollView, View } from 'react-native';
import CardUser from '../../components/cardUser';
import data from './data.json';
import moment from 'moment';

const styles = StyleSheet.create({
  layoutStyle: {
    height: '100%',
    alignItems: 'stretch',
    padding: 5,
  },
  header: {
    width: '100%',
    height: 50,
    paddingLeft: 35,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  date: {
    color: '#2a2a2c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tag: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    backgroundColor: '#2a2a2c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: '#fff',
  },
});

const Users = () => {

  console.log(data[5].id);

  return (
    <Layout style={styles.layoutStyle}>
      <View style={styles.header}>
        <Text style={styles.date}>{moment().format('ll')}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{data.length} Task</Text>
        </View>
      </View>
      <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
        {data.map((value) => (
          <CardUser
            key="id"
            last={data[data.length - 1].id === value.id ? 'last' : null}
            first={data[0].id === value.id ? 'first' : null}
            data={value}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default Users;
