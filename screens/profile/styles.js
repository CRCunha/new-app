import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  layoutStyle: {
    height: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',

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
    padding: 8,
    width: 30,
    height: 30,
  },
  ProfileHeader: {
    height: 120,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  avatar: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    width: 75,
    height: 75,
  },
  perfilInfos: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    color: '#2a2a2c',
    fontWeight: 'bold',
    fontSize: 18,
    height: 30,
  },
  descritpion: {
    color: '#ccc',
    fontWeight: '400',
    fontSize: 14,
  },
  skillsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: '100%',
    height: 90,
  },
  descritpionSkills: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#ccc',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 20,
  },
});
