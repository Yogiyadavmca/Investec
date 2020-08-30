import React from 'react';
import {  
  StyleSheet,
  Text,  
  TouchableOpacity,
} from 'react-native';

import color from '../../theme/color';

const CTAButtonComponent = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: props.disabled
          ? color.inactiveButtonBackgroundColor
          : color.primaryColor,
      }}
      {...props}>
      <Text
        style={{
          color: props.disabled
            ? color.buttonTextColor
            : color.activeButtonTextColor,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CTAButtonComponent;

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
});
