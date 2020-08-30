import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SlideButton} from '../../../components/buttons';
import Color from '../../../theme/color';
import CommonStyle from "../../../layout/styles"

import {getName} from '../first/reducer';

const SecondScreen = (props) => {
  const insets = useSafeAreaInsets();
  const {navigation} = props;

  const name = useSelector(getName);

  const navigateToNextPage = () => {
    navigation.navigate('Third');
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...CommonStyle.container,
      }}>
      <View style={CommonStyle.content}>
        <Text style={styles.title}>{`Welcome ${name}`}</Text>
        <SlideButton
          onReachEnd={() => {
            navigateToNextPage();
          }}
          containerStyle={styles.slideContainer}
          knobElement={<View style={styles.slideKnob} />}>
          <Text style={styles.slideText}>{'Slide me to continue'}</Text>
        </SlideButton>
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  slideKnob: {
    width: 50,
    margin: 4,
    borderRadius: 5,
    height: 50,
    backgroundColor: Color.primaryColor,
  },
  slideContainer: {
    margin: 8,
    backgroundColor: Color.backgroundColor,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  slideText: {
    color: Color.buttonTextColor,
  },
});
