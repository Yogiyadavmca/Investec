import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {PlainButton} from '../../../components/buttons';
import Color from '../../../theme/color';
import CommonStyle from "../../../layout/styles"

import {getName} from '../first/reducer';

const ThirdScreen = (props) => {
  const insets = useSafeAreaInsets();
  const {navigation} = props;

  const name = useSelector(getName);

  const popToRoot = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View
      style={{
        ...CommonStyle.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <View style={CommonStyle.content}>
        <Text style={styles.title}>{`Welcome ${name}`}</Text>
        <PlainButton title={'Back to Home'} onPress={popToRoot} />
      </View>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
