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
    width: '15%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardAssideUpper: {
    width: 16,
    height: '8%',
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  cardAssideUpperFisrt: {
    width: 17.5,
    height: '9%',
    borderRadius: 100,
    backgroundColor: '#fff',

    borderStyle: 'solid',
    borderWidth: 4.5,
    borderColor: '#171717',
  },
  cardAssideLine: {
    backgroundColor: '#ddd',
    height: '46%',
    width: 3,
  },
  cardAssideLast: {
    backgroundColor: 'transparent',
    height: '46%',
    width: 3,
  },
  cardType1: {
    width: '85%',
    height: '70%',
    backgroundColor: '#756af4',
    borderRadius: 24,
    paddingLeft: 20,
    paddingRight: 20,

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardType2: {
    width: '85%',
    height: '70%',
    backgroundColor: '#e26e6e',
    borderRadius: 24,
    paddingLeft: 20,
    paddingRight: 20,

    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  top: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
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
  bot: {
    width: '100%',
    height: '50%',
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
});
