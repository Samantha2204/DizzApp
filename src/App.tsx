import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/Home";
import InstructionScreen from "./screens/InstructionScreen";
import NystagmusScreen from "./screens/NystagmusScreen";
import TimerScreen from "./screens/TimerScreen";
import SelectionScreen from "./screens/SelectionScreen";
import TwoNystagmusScreen from "./screens/TwoNystagmusScreen";
import ResultScreen from "./screens/ResultScreen";
import TreatmentDirectionScreen from "./screens/TreatmentDirectionScreen";
import MoreInfoScreen from "./screens/MoreInfoScreen";
import { RFPercentage } from "react-native-responsive-fontsize";

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'DizzApp!',
        headerStyle: {
          backgroundColor: '#412a7c',
          height: RFPercentage(15),
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: RFPercentage(5),
          alignSelf: 'center'
        },
      }
    },
    Instruction: {
      screen: InstructionScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    Nystagmus: {
      screen: NystagmusScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    Timer: {
      screen: TimerScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    Selection: {
      screen: SelectionScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    TwoNystagmus: {
      screen: TwoNystagmusScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    Result: {
      screen: ResultScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    TreatmentDirection: {
      screen: TreatmentDirectionScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
    MoreInfo: {
      screen: MoreInfoScreen,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppStack);