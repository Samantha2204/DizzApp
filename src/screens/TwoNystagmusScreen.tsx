import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TextBox } from "../components/TextBox";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { screenDetails } from "../screenDetails";
import { getScreenType } from "../ScreenType";
import Video from 'react-native-video';
import { RFPercentage } from "react-native-responsive-fontsize";
import Sound from "react-native-sound";
import { speakerPressed } from "../audio"
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

const TwoNystagmusScreen = (props: any) => {
  useKeepAwake();
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  const { video, video2, audio } = details[index];
  let sound = new Sound(audio);

  return (
    <View style={styles.container}>
      <TopNavigationBar
        showHome
        onHomePress={() => { props.navigation.navigate("Home"), { index: 0 } }}
      />
      <View style={styles.middleContainer}>
        <TextBox
          index={props.navigation.state.params.index}
          instructions={details}
        />
        <Video
          repeat
          muted
          resizeMode="contain"
          source={video}
          style={styles.video}
        />
        <Text style={styles.text}>Geotropic Nystagmus (Beating towards the ground){'\n'}</Text>
        <Video
          repeat
          muted
          resizeMode="contain"
          source={video2}
          style={styles.video}
        />
        <Text style={styles.text}>Ageotropic Nystagmus (Beating away from the ground)</Text>
      </View>

      <BottomNavigationBar
        showLeft
        showSpeaker
        showRight
        onRightPress={() => { sound.stop(); props.navigation.navigate(getScreenType('RIGHT', details, index + 1), { index: index = index + 1 }) }}
        onLeftPress={() => { sound.stop(); props.navigation.navigate(getScreenType('LEFT', details, index - 1), { index: index = index - 1 }) }}
        onSpeakerPress={() => speakerPressed(sound)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#412a7c",
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: RFPercentage(2),
    alignSelf: 'center',
    color: "#f9f7ff",
  },
  video: {
    flex: 5,
    width: '90%',
    alignSelf: 'center',
    marginBottom: RFPercentage(2.5)
  },
  middleContainer: {
    flex: 8,
  }
});

export default TwoNystagmusScreen;