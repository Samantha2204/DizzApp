import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TextBox } from "../components/TextBox";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { screenDetails } from "../screenDetails"
import { getScreenType } from "../ScreenType";
import { RFPercentage } from "react-native-responsive-fontsize";
import Sound from "react-native-sound";
import { speakerPressed } from "../audio"
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

const formatNumber = (number: number) => `0${number}`.slice(-2);
const getRemaining = (time: any) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { secs: formatNumber(secs) };
}

const Timer = (props: any) => {
  useKeepAwake();
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  const [remainingSecs, setRemainingSecs] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [resetKey, setResetKey] = useState(false);
  const { secs } = getRemaining(remainingSecs);
  let alarmPath = require('../audio/alarmBeep.wav')
  let alarm = useRef(new Sound(alarmPath));

  let { audio } = details[index];
  let sound = new Sound(audio);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setRemainingSecs(30);
    setIsActive(false);
    setResetKey(!resetKey);
  }

  useEffect(() => {
    let interval: any;
    if (isActive && remainingSecs !== 0) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs - 1);
      }, 1000);
    } else if (isActive && remainingSecs == 0) {
      clearInterval(interval);
      alarm.current.play();
      reset();
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  const renderTime = () => {
    return (
      <View style={styles.timer}>
        <Text style={styles.text}>Remaining</Text>
        <Text style={styles.timerText}>{`${secs}`}</Text>
        <Text style={styles.text}>seconds</Text>
      </View>
    );
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
        <View style={styles.timerBorder}>
          <CountdownCircleTimer
            key={resetKey.toString()}
            duration={32}
            size={RFPercentage(45)}
            isPlaying={isActive}
            colors={[['#00c853', 0.33],['#304ffe', 0.33],['#d50000', 0.33]]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </View>
        <View style={styles.timerSelection}>
          <TouchableOpacity onPress={toggle} style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reset} style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
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
  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#412a7c",
    width: '100%',
    height: '100%'
  },
  button: {
    flexDirection: 'row',
    marginTop: RFPercentage(2),
    width: RFPercentage(22),
    height: RFPercentage(12),
    borderRadius: RFPercentage(10),
    backgroundColor: '#f9f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: RFPercentage(5),
    color: '#412a7c'
  },
  timerBorder: {
    alignItems: 'center',
  },
  timerText: {
    color: '#f9f7ff',
    fontSize: RFPercentage(10),
  },
  timerSelection: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 15 },
  },
  middleContainer: {
    flex: 8,
  },
  text: {
    color: '#f9f7ff',
    fontSize: RFPercentage(5),
    alignSelf: 'center'
  },
  timer: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
