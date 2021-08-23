import styled from 'styled-components';
import {
  compose,
  background,
  border,
  position,
  shadow,
  layout,
} from 'styled-system';

const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  compose(
    background,
    border,
    position,
    shadow,
    layout,
  ),
);

export default Box;