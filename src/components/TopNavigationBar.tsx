import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from 'react-navigation'

export const TopNavigationBar = ({
  showHome,
  onHomePress
}: {
  showHome: any,
  onHomePress: any
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {showHome ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onHomePress}
        >
          <Icon
            name="ios-home"
            color='#f9f7ff'
            size={RFPercentage(6)}
            >
          </Icon>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex:1,
    left: RFPercentage(2.5),
    justifyContent:'center'
  },
});