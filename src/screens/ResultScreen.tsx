import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { TopNavigationBar } from "../components/TopNavigationBar";
import { resultArray } from "../screens/SelectionScreen";
import { RFPercentage } from "react-native-responsive-fontsize";

const ResultScreen = (props: any) => {

  const printResultArray = (var1) => {
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][0].includes(var1)) {
        return resultArray[i][1];
      }
    }
    return "NONE";
  }

  const recommendedManoeuvre = () => {
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][1].includes('YES')) {
        if (resultArray[i][0].includes('Right Posterior')) {
          return 'Right Epley Manoeuvre';
        } else if (resultArray[i][0].includes('Left Posterior')) {
          return 'Left Epley Manoeuvre';
        } else if (resultArray[i][0].includes('Geotropic')) {
          if (resultArray[resultArray.length - 1][1] == 'LEFT') {
            return 'Left Lempert Manoeuvre';
          } else {
            return 'Right Lempert Manoeuvre';
          }
        } else if (resultArray[i][0].includes('Ageotropic')) {
          if (resultArray[resultArray.length - 1][1] == 'LEFT') {
            return 'Right Lempert Manoeuvre';
          } else {
            return 'Left Lempert Manoeuvre';
          }
        }
      }
    }
    return 'NONE';
  }

  const freeArray = () => {
    resultArray.length = 0;
  }

  return (
    <View style={styles.container}>
      <TopNavigationBar
        showHome
        onHomePress={() => { props.navigation.navigate("Home"), { index: 0 }, freeArray() }}
      />
      <View style={styles.middleContainer}>
        <View style={styles.cont1}>
          <Text style={styles.header}> Dix-Hallpike Test Result: - </Text>
          <Text style={styles.text}> Right Posterior: {resultArray[0][1]}</Text>
          <Text style={styles.text}> Left Posterior: {resultArray[1][1]}</Text>
        </View>
        <View style={styles.cont2}>
          <Text style={styles.header}> Supine Roll Test Result: - </Text>
          <Text style={styles.title}>
            <Text style={styles.text2}>When head was turned to the right: {'\n'}</Text>
            <Text style={styles.text2}>
              <Text style={styles.text3}>Geotropic: {printResultArray('Right Geotropic')}{"\n"}</Text>
              <Text style={styles.text3}>Ageotropic: {printResultArray('Right Ageotropic')}</Text>
            </Text>
          </Text>
          <Text style={styles.title}>
            <Text style={styles.text2}> When head was turned to the left: {'\n'}</Text>
            <Text style={styles.text2}>
              <Text style={styles.text3}>Geotropic: {printResultArray('Left Geotropic')}{"\n"}</Text>
              <Text style={styles.text3}>Ageotropic: {printResultArray('Left Ageotropic')}</Text>
            </Text>
          </Text>
          <Text style={styles.text}> Fastest Side: {printResultArray('Fastest Side')} </Text>
        </View>

        <View style={styles.cont3}>
          <Text style={styles.header}> Recommended Manoeuvre: - </Text>
          <View>
            <Text style={styles.text}> {recommendedManoeuvre()} </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("TreatmentDirection", { index: 24 }, freeArray())}
          style={[styles.button, styles.shadow]}
        >
          <Text style={styles.buttonText}>Epley Manoeuvre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("TreatmentDirection", { index: 36 }, freeArray())}
          style={[styles.button, styles.shadow]}
        >
          <Text style={styles.buttonText}>Lempert Manoeuvre</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#412a7c",
    width: '100%',
    height: '100%'
  },
  middleContainer: {
    flex: 9,
  },
  cont1: {
    flex: 1.4,
  },
  cont2: {
    flex: 3.8,
  },
  cont3: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: RFPercentage(2.5),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
    marginLeft: RFPercentage(2.5),
    marginRight: RFPercentage(2.5),
  },
  text2: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    fontSize: RFPercentage(2.5),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
  },
  text3: {
    flex: 1,
    fontWeight: 'normal',
    // backgroundColor:"black",
    // backgroundColor:"green",
    // fontSize: RFPercentage(2.5),
    // textAlign: 'justify',
    color: "#f9f7ff",
    // lineHeight: RFPercentage(5),
  },
  title: {
    display: "flex",
    flexDirection: "column",
    height: '35%',
    fontSize: RFPercentage(2.5),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
    fontWeight: 'bold',
    marginLeft: RFPercentage(3),
    marginRight: RFPercentage(3),
  },
  header: {
    fontSize: RFPercentage(3),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
    fontWeight: 'bold',
    marginLeft: RFPercentage(2.5),
    marginRight: RFPercentage(2.5),
  },
  button: {
    flexDirection: 'row',
    borderWidth: 5,
    width: RFPercentage(18),
    height: RFPercentage(10),
    borderRadius: RFPercentage(10),
    borderColor: '#f9f7ff',
    backgroundColor: '#f9f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: RFPercentage(2.5),
    color: '#412a7c',
    textAlign: 'center'
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  }
});

export default ResultScreen;