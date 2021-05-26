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
import { screenDetails } from "../screenDetails";
import { RFPercentage } from "react-native-responsive-fontsize";
import { speakerPressed } from '../audio';
import Sound from 'react-native-sound';

export var treatmentDirection = '';

const setDirection = (direction) => {
  treatmentDirection = direction;
}

const TreatmentDirectionScreen = (props: any) => {
  const details = screenDetails;
  let index = props.navigation.state.params.index;
  const { audio } = details[index];
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Instruction', { index: index + 1 }, setDirection('LEFT'))}
            style={[styles.button, styles.shadow]}
          >
            <Text style={styles.buttonText}>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Instruction', { index: index + 1 }, setDirection('RIGHT'))}
            style={[styles.button, styles.shadow]}
          >
            <Text style={styles.buttonText}>Right</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomNavigationBar
        showLeft={null}
        showSpeaker
        showRight={null}
        onLeftPress
        onSpeakerPress={() => speakerPressed(sound)}
        onRightPress
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
  button: {
    borderWidth: 5,
    width: RFPercentage(50),
    height: RFPercentage(15),
    borderRadius: RFPercentage(30),
    borderColor: '#f9f7ff',
    backgroundColor: '#f9f7ff',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: RFPercentage(5),
    color: '#412a7c',
    textAlign: 'center'
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    bottom: RFPercentage(5)
  },
  middleContainer: {
    flex: 8,
  }
});

export default TreatmentDirectionScreen;