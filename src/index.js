/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const enums = ['window', 'screen'];

const initialDimensions = {
  fontScale: null, height: null, width: null, scale: null,
};

export default (type) => {
  if (enums.indexOf(type) === -1) {
    return initialDimensions;
  }

  const [dimensions, setDimensions] = useState(Dimensions.get(type));

  useEffect(() => {
    const currentDimensions = Dimensions.get(type);
    setDimensions(currentDimensions);
  }, [type]);

  useEffect(() => {
    function dimensionsChange(params) {
      setDimensions(params[type]);
    }

    Dimensions.addEventListener('change', dimensionsChange);
    return () => {
      Dimensions.removeEventListener('change', dimensionsChange);
    };
  }, [type]);

  return dimensions;
};
