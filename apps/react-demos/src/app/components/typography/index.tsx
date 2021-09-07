import React from 'react';
import styled from 'styled-components';
import {
  compose,
  color,
  typography,
  layout,
  space,
  border,
  variant
} from 'styled-system';
import { Text as RebassText } from 'rebass/styled-components';

const BaseText = styled(RebassText)(
  props => getDerivedProps(props),
  compose(
    border,
    color,
    typography,
    layout,
    space,
    variant({ scale: 'typography' })
  )
);

const getDerivedProps = props => {
  const { underline, deleted, mark, italic, bold } = props;

  const styles = {
    marginBottom:'20px'
  };

  if (underline) {
    styles[`text-decoration`] = `underline`;
  }
  if (deleted) {
    styles[`text-decoration`] = `line-through`;
  }
  if (mark) {
    styles[`backgroundColor`] = `#FFFCE1`;
  }
  if (italic) {
    styles[`font-style`] = `italic`;
  }
  if (bold) {
    styles[`font-weight`] = `bold`;
  }
  return styles;
};

export const Text = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseText {...props} />
  );
};

export default Text;