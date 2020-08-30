import React from 'react';
import {StyleSheet} from 'react-native';
import Color from '../theme/color'

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 100,
    height: 'auto',
    width: '100%',
    justifyContent: 'space-between',
    borderColor: Color.borderColor,
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
  },
});

export default CommonStyle;
