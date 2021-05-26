import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { TextBox } from "../components/TextBox";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { screenDetails } from "../screenDetails";
import { getScreenType } from "../ScreenType";
import Video from 'react-native-video';
import Sound from "react-native-sound";
import { speakerPressed } from "../audio"
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

const NystagmusScreen = (props: any) => {
  useKeepAwake();
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  let { video, audio } = details[index];
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
      </View>
      <BottomNavigationBar
        showLeft
        showSpeaker
        showRight
        onLeftPress={() => { sound.stop(); props.navigation.navigate(getScreenType('LEFT', details, index - 1), { index: index = index - 1 }) }}
        onSpeakerPress={() => speakerPressed(sound)}
        onRightPress={() => { sound.stop(); props.navigation.navigate(getScreenType('RIGHT', details, index + 1), { index: index = index + 1 }) }}
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
  video: {
    flex: 3,
    width: '80%',
    alignSelf: 'center',
  },
  middleContainer: {
    flex: 8,
  }
});

export default NystagmusScreen;