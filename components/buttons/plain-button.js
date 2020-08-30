import React from 'react';
import {Button, StyleSheet} from 'react-native';

import color from '../../theme/color';

const PlainButtonComponent = (props) => {
  return <Button {...props} color={color.buttonTextColor} />;
};

export default PlainButtonComponent;

// const styles = StyleSheet.create({
//   textColor: color.buttonTextColor,
// });
