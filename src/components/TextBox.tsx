import {
  Text,
  StyleSheet
} from 'react-native';
import React from 'react';
import { InstructionsProps } from '../ScreenType';
import { treatmentDirection } from '../screens/TreatmentDirectionScreen'
import { RFPercentage } from "react-native-responsive-fontsize";

let replaceText = (content) => {
  let unaffected = (treatmentDirection == 'LEFT' ? 'RIGHT' : 'LEFT');
  let newContent = new Array();
  for (let i = 0; i < content.length; i++) {
    let result = content[i].replace('UNAFFECTED', unaffected);
    result = result.replace('AFFECTED', treatmentDirection);
    newContent.push(result)
  }
  return newContent;
}

export const TextBox = ({
  index,
  instructions,
}: InstructionsProps) => {
  const instruction = instructions[index]
  const { content } = instruction;
  const newContent = content;
  return (
    <Text style={[styles.textContainer, styles.text]}>{replaceText(newContent)}</Text>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 3,
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    marginLeft: RFPercentage(25),
    marginRight: RFPercentage(25),
    fontSize: RFPercentage(2.7),
    textAlign: 'justify',
    color: "#f9f7ff",
    lineHeight: RFPercentage(5),
  },
});