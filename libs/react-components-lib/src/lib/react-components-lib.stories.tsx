import React from 'react';
import {
  ReactComponentsLib,
  ReactComponentsLibProps
} from './react-components-lib';

export default {
  component: ReactComponentsLib,
  title: 'ReactComponentsLib'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ReactComponentsLibProps = {};

  return <ReactComponentsLib />;
};
