import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { TopNavigationBar } from "../components/TopNavigationBar";
import { RFPercentage } from "react-native-responsive-fontsize";

const MoreInfoScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <TopNavigationBar
        showHome
        onHomePress={() => { props.navigation.navigate("Home"), { index: 0 } }}
      />
      <View style={{ height: '88%' }}>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>This application is designed to train clinicians from all levels to test and treat Benign paroxysmal positional vertigo (BPPV). {'\n'} </Text>
          <Text style={styles.title}>What is BPPV? </Text>
          <Text style={styles.text}>BPPV is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. {'\n'} </Text>
          <Text style={styles.title}>How is it triggered? </Text>
          <Text style={styles.text}>BPPV is triggered by certain changes in head position, such as tipping the head up or down. It's rarely serious unless it increases the risk of falling. {'\n'} </Text>
          <Text style={styles.title}>Symptoms </Text>
          <Text style={styles.text}>
            The symptoms of BPPV may include: {'\n'}
            - Dizziness {'\n'}
            - Vertigo {'\n'}
            - A loss of balance or unsteadiness {'\n'}
            - Nausea {'\n'}
            - Vomiting {'\n'}
            The signs and symptoms of BPPV can come and go and commonly last less than one minute. Episodes of BPPV can disappear for some time and then recur. {'\n'} {'\n'}
            Activities that bring about the signs and symptoms of BPPV can vary from person to person, but are almost always brought on by a change in head position. Some people also feel out of balance when standing or walking. {'\n'}
          </Text>
        </ScrollView>
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
  textContainer: {
    flex: 8,
    marginLeft: RFPercentage(2),
    marginRight: RFPercentage(2),
    alignSelf: 'center',
  },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#f5f5f5',
    // textShadowColor: '#f5f5f5',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 1
  },
  text: {
    fontSize: RFPercentage(2.5),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
  },
});

export default MoreInfoScreen;