import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

import {setName} from './reducer';
import {CTAButton} from '../../../components/buttons';
import {Input} from '../../../components/input';
import Color from '../../../theme/color';
import CommonStyle from '../../../layout/styles';

const FirstScreen = (props) => {
  const insets = useSafeAreaInsets();
  const {navigation} = props;

  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);
  const [text, setText] = useState('');

  const onChangeText = (text) => {
    setText(text);
    setActive(text.length > 0);
    dispatch(setName(text));
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
        ...CommonStyle.container,
      }}>
      <View style={CommonStyle.content}>
        <View>
          <Text style={styles.text}>Please Enter Name</Text>
          <Input onChangeText={(text) => onChangeText(text)} value={text} />
        </View>
        <View>
          <CTAButton
            title={'Navigate To Next Screen'}
            disabled={!isActive}
            onPress={() => {
              navigation.navigate('Second');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  text: {
    width: '100%',
    marginBottom: 16,
  },
});
