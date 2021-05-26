import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { RFPercentage } from "react-native-responsive-fontsize";

export const BottomNavigationBar = ({
  showLeft,
  showRight,
  showSpeaker,
  onSpeakerPress,
  onLeftPress,
  onRightPress
}: {
  showLeft: any,
  showRight: any,
  showSpeaker: any,
  onSpeakerPress: any,
  onLeftPress: any,
  onRightPress: any
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.left, styles.shadow]}>
        {showLeft ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onLeftPress}
          >
            <View>
              <Icon
                name='chevron-left'
                color='#f9f7ff'
                size={RFPercentage(7)}>
              </Icon>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>

      <View>
        {showSpeaker ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSpeakerPress}
            style={[styles.speaker, styles.shadow]}
          >
            <View>
              <Icon2
                name='md-volume-high'
                color='#412a7c'
                size={RFPercentage(5)}>
              </Icon2>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.right}>
        {showRight ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onRightPress}
            style={[styles.right, styles.shadow]}
          >
            <View>
              <Icon
                name='chevron-right'
                color='#f9f7ff'
                size={RFPercentage(7)}>
              </Icon>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>

    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1.2,
    marginTop: RFPercentage(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  left: {
    position: 'absolute',
    left: 20
  },
  right: {
    position: 'absolute',
    right: 10
  },
  speaker: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: RFPercentage(8),
    height: RFPercentage(8),
    backgroundColor: '#f9f7ff',
    borderRadius: RFPercentage(4),
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  }
})