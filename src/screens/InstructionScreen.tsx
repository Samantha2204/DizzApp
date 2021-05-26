import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { TextBox } from "../components/TextBox";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { screenDetails } from "../screenDetails";
import { getScreenType } from "../ScreenType";
import VideoPlayer from 'react-native-video-controls';
import { resultArray } from "../screens/SelectionScreen";
import { treatmentDirection } from '../screens/TreatmentDirectionScreen'
import { RFPercentage } from "react-native-responsive-fontsize";
import Sound from "react-native-sound";
import { speakerPressed } from "../audio"
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

const InstructionScreen = (props: any) => {
  useKeepAwake();
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  let { video, video2, audio, audio2 } = details[index];
  const [showVideo, setShowVideo] = useState(true);

  const pauseVideo = () => {
    setShowVideo(false);
  }

  useEffect(() => {
    const willFocusSubscription =
      props.navigation.addListener('willFocus',
        () => {
          setShowVideo(true);
        }
      );
    return () => {
      willFocusSubscription.remove();
    }
  }, [])

  const backNavigate = () => {
    if( resultArray.length > 4 && resultArray[resultArray.length - 1][0] == 'Left Ageotropic' && resultArray[resultArray.length - 2][0] == 'Left Geotropic') {
      if(resultArray[resultArray.length - 1][1] == 'NO' && resultArray[resultArray.length - 2][1] == 'NO') {
        return props.navigation.navigate(getScreenType('LEFT', details, index - 2), { index: index = index - 2 });
      }
    } 
    return props.navigation.navigate(getScreenType('LEFT', details, index - 1), { index: index = index - 1 });
  }

  const videoPath = () => {
    if (video2 != '') {
      if (treatmentDirection == 'LEFT') {
        return video;
      } else {
        return video2;
      }
    } else {
      return video;
    }
  }

  const audioPath = () => {
    if (audio2 != '') {
      if (treatmentDirection == 'LEFT') {
        return audio;
      } else {
        return audio2;
      }
    } else {
      return audio;
    }
  }

  let sound = new Sound(audioPath());

  return (
    <View style={styles.container}>
      <TopNavigationBar
        showHome
        onHomePress={() => { props.navigation.navigate("Home"), { index: 0 } }}
      />
      <View style={styles.middleContainer}>
        <View style={styles.containerVideo}>
          <VideoPlayer
            source={videoPath()}
            paused={true}
            disableBack
            disableVolume
            style={styles.video}
          />
        </View>
        <TextBox
          index={props.navigation.state.params.index}
          instructions={details}
        />
      </View>
      <BottomNavigationBar
        showLeft={((index != 0) ? true : false)}
        showSpeaker
        showRight={((index == 35 || index == 49) ? false : true)}
        onLeftPress={() => { pauseVideo(); backNavigate(); sound.stop();}}
        onSpeakerPress={() => speakerPressed(sound)}
        onRightPress={() => { pauseVideo(); sound.stop(); props.navigation.navigate(getScreenType('RIGHT', details, index + 1), { index: index = index + 1 })}}
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
  containerVideo: {
    flex: 2,
    height: '30%',
    width: '95%',
    alignSelf: 'center',
    marginBottom: RFPercentage(2.5)
  },
  video: {
    height: '30%',
    width: '95%',
    alignSelf: 'center',
    borderRadius: RFPercentage(2.5),
  },
  middleContainer: {
    flex: 8,
  }
});

export default InstructionScreen;