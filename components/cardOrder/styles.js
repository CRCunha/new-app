import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 190,
    flexDirection: 'row',
    flexWrap: 'nowrap',

    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAsside: {
    flexDirection: 'column',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAccept: {
    width: 42,
    height: 42,
    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,

    backgroundColor: '#00A0D3',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  buttonDecline: {
    width: 42,
    height: 42,
    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

    backgroundColor: '#FDB576',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardType1: {
    width: '80%',
    height: '70%',
    backgroundColor: '#D38DFF',
    borderRadius: 24,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardType2: {
    width: '80%',
    height: '70%',
    backgroundColor: '#FF94A7',
    borderRadius: 24,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  top: {
    width: '100%',
    height: '50%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  tagTitle: {
    color: '#2a2a2c',
  },
  top: {
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bot: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  avatarContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  date: {
    color: '#fff',
  },
  descritpion: {
    fontWeight: '400',
    color: '#fff',
    fontSize: 16,
    width: '100%',
  },
  name: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 22,
    width: '100%',
  },
});
