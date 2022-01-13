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

const getDerivedProps = props => {
  const {underline, deleted, mark, italic, bold} = props;
  const styles = {marginBottom: '20px'};
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

const BaseText = styled(RebassText)(
  props => getDerivedProps(props),
  compose(
    border,
    color,
    typography,
    layout,
    space,
    variant({scale: 'typography'})
  )
);

interface TextProps {
  children: React.ReactNode
  variant?: string
  ml?: number
  position?: string
  as?: any
  color?: string
  fontSize?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  pl?: number
  mt?: number
  pt?: number
  underline?: boolean
  deleted?: boolean
  mark?: boolean
  italic?: boolean
  bold?: boolean
  fontWeight?: string | number | string[] | number[]
  m?: string | number | string[] | number[]
  p?: string | number | string[] | number[]
  mb?: string | number | string[] | number[]
  mr?: string | number | string[] | number[]
  my?: string | number | string[] | number[]
}

export const Text: React.FC<TextProps> = props => {
  return (
    <BaseText {...props} />
  );
};

export default Text;
