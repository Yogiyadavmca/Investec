import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Color from '../../theme/color';

const DefaultInput = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default DefaultInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Color.borderColor,
    borderWidth: 1,
    marginBottom: 40,
  },
});
