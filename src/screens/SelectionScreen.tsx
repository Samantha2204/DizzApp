import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { TextBox } from "../components/TextBox";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { screenDetails } from "../screenDetails"
import { getScreenType } from "../ScreenType";
import Video from 'react-native-video'
import { RFPercentage } from "react-native-responsive-fontsize";
import Sound from "react-native-sound";
import { speakerPressed } from "../audio"
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

export var resultArray = new Array();

const SelectionScreen = (props: any) => {
  useKeepAwake();
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  let { nystagmusType } = details[index];
  let { video, audio } = details[index];
  let sound = new Sound(audio);

  const checkIsDirection = () => {
    if (nystagmusType?.includes('Fastest')) {
      return true;
    }
  }

  const nextNavigate = (result: string) => {
    let tempArray = new Array();
    if (nystagmusType?.includes('Left Ageotropic')) {
      if (resultArray[resultArray.length - 1][1] == 'NO' && result == 'NO') {
        tempArray.push(nystagmusType, result);
        resultArray.push(tempArray);
        return props.navigation.navigate(getScreenType('RIGHT', details, index + 2), { index: index = index + 2 });
      }
    }

    if (resultArray.length > 0) {
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0].includes(nystagmusType)) {
          if (resultArray[i][1] != result) {
            resultArray.splice(i, 1)
          }
        }
      }
    }
    tempArray.push(nystagmusType, result);
    resultArray.push(tempArray);
    sound.stop();

    return props.navigation.navigate(getScreenType('RIGHT', details, index + 1), { index: index = index + 1 });
  }

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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => nextNavigate(checkIsDirection() ? 'LEFT' : 'YES')} style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>{checkIsDirection() ? 'LEFT' : 'YES'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nextNavigate(checkIsDirection() ? 'RIGHT' : 'NO')} style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>{checkIsDirection() ? 'RIGHT' : 'NO'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNavigationBar
        showLeft
        showSpeaker
        showRight={null}
        onLeftPress={() => { sound.stop(); props.navigation.navigate(getScreenType('LEFT', details, index - 1), { index: index = index - 1 }) }}
        onSpeakerPress={() => speakerPressed(sound)}
        onRightPress
      />
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: 5,
    marginTop: RFPercentage(2),
    width: RFPercentage(22),
    height: RFPercentage(12),
    borderRadius: RFPercentage(10),
    borderColor: '#f9f7ff',
    backgroundColor: '#f9f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: RFPercentage(5),
    color: '#412a7c'
  },
  container: {
    backgroundColor: "#412a7c",
    width: '100%',
    height: '100%'
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  video: {
    flex: 6,
    height: '30%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: RFPercentage(3),
  },
  middleContainer: {
    flex: 8,
  }
});

export default SelectionScreen;