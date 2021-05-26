import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  navigation: any
}

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6a51ae"
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello, {"\n"}
          How Can We Help?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('Instruction', { index: 0 })}>
            <Image
              source={require('../images/DHT.png')}
              style={styles.buttonImage}
            />
            <View>
              <Text style={styles.buttonText}>
                Dix-Hallpike Test
              </Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('TreatmentDirection', { index: 24 })}>
            <Image
              source={require('../images/EM.png')}
              style={styles.buttonImage}
            />
            <View>
              <Text style={styles.buttonText}>
                Epley Manoeuvre
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('TreatmentDirection', { index: 36 })}>
            <Image
              source={require('../images/LM.png')}
              style={styles.buttonImage}
            />
            <View>
              <Text style={styles.buttonText}>
                Lempert Manoeuvre
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('MoreInfo', { index: 0 })}>
            <Image
              source={require('../images/info.png')}
              style={styles.buttonImage}
            />
            <View>
              <Text style={styles.buttonText}>
                See More Information
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: RFPercentage(1)
  },
  buttonContainer: {
    width: '50%',
    height: '35%',
    padding: RFPercentage(1)
  },
  button: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },

  },
  buttonImage: {
    height: '65%',
    width: '85%',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  buttonText: {
    marginLeft: RFPercentage(2.5),
    marginRight: RFPercentage(2.5),
    fontSize: RFPercentage(2.5),
    textAlign: 'center',
    color: "#412a7c",
    fontWeight: 'bold'
  },
  title: {
    fontSize: RFPercentage(5),
    marginTop: RFPercentage(4),
    marginBottom: RFPercentage(4),
    left: RFPercentage(2.5),
    fontWeight: 'bold',
    color: "#412a7c",
  },

});

export default Home;