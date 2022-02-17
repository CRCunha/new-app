import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Profile = () => {

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Profile;
