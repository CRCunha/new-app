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
    paddingRight: 0,
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
  descritpionDash: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#ccc',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 0,
  },
  textSkills: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  dashContainer: {
    paddingLeft: 10,
    paddingRight: 0,
    marginTop: 30,
    width: '100%',
  },
  dashContainerItems: {
    width: '100%',
  },
  item: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BE93FD',
  },
  itemTextContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
  },
  itemText: {
    color: '#2a2a2c',
    fontWeight: 'bold',
  },
  itemTextTagContainer: {
    textAlign: 'center',
    backgroundColor: '#9AC96D',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  itemTextTagContainerAchiv: {
    textAlign: 'center',
    backgroundColor: '#FFBD95',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  itemTextTagContainerPrivacity: {
    textAlign: 'center',
    backgroundColor: '#FFACC0',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  itemTextTag: {
    color: '#fff',
  },
});
