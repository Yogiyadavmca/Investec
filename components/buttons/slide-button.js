import React, {useState, useRef, useEffect} from 'react';
import {View, PanResponder, Animated} from 'react-native';

import PropTypes from 'prop-types';

const SlideButtonComponent = (props) => {
  const [knobWidth, setKnobWidth] = useState(0);
  const [canReachEnd, setCanReachEnd] = useState(true);
  const [totalWidth, setTotalWidth] = useState(0);

  const offsetX = useRef(new Animated.Value(0)).current;

  const totalWidthRef = useRef();
  const squareWidthRef = useRef();

  useEffect(() => {
    totalWidthRef.current = totalWidth;
    squareWidthRef.current = knobWidth;
  });

  const panResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: () => !canReachEnd,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        setCanReachEnd(true);
      },
      //onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        if (!props.disabled) {
          const margin = totalWidthRef.current - squareWidthRef.current * 1.025;
          if (gestureState.dx > 0 && gestureState.dx <= margin) {
            offsetX.setValue(gestureState.dx);
          } else if (gestureState.dx > margin) {
            onReachEnd();
            return;
          }
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        resetSlider();
        setCanReachEnd(true);
      },
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    }),
  ).current;

  const onReachEnd = () => {
    canReachEnd && props.onReachEnd();
    setCanReachEnd(false);
    resetSlider();
  };

  const resetSlider = () => {
    Animated.timing(offsetX, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      onLayout={(event) => {
        //totalWidth.current = event.nativeEvent.layout.width
        setTotalWidth(event.nativeEvent.layout.width);
      }}
      style={[props.containerStyle, {alignItems: 'flex-start'}]}>
      <Animated.View
        onLayout={(event) => {
          console.log('setSquareWidth ', event.nativeEvent.layout.width);
          setKnobWidth(event.nativeEvent.layout.width);
        }}
        style={{transform: [{translateX: offsetX}]}}
        {...panResponder.panHandlers}>
        {props.knobElement}
      </Animated.View>

      <View
        style={[
          {alignSelf: 'center', position: 'absolute', zIndex: -1},
          props.childrenContainer,
        ]}>
        {props.children}
      </View>
    </View>
  );
};

export default SlideButtonComponent;

SlideButtonComponent.propTypes = {
  childrenContainer: PropTypes.object,
  containerStyle: PropTypes.object,
  knobElement: PropTypes.element,
  onReachEnd: PropTypes.func,
  disabled: PropTypes.bool,
};

SlideButtonComponent.defaultProps = {
  childrenContainer: {backgroundColor: 'transparent'},
  containerStyle: {},
  knobElement: <View style={{width: 50, height: 50}} />,
  onReachEnd: () => {},
  disabled: false,
};
