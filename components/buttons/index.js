import React from 'react';

import PlainButtonComponent from './plain-button';
import CTAButtonComponent from './ctabutton';
import SlideButtonComponent from './slide-button';

export const PlainButton = (props) => {
  return <PlainButtonComponent {...props} />;
};

export const CTAButton = (props) => {
  return <CTAButtonComponent {...props} />;
};

export const SlideButton = (props) => {
  return <SlideButtonComponent {...props} />;
};
