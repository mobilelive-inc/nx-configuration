import styled from 'styled-components';
import {
  compose,
  border,
  layout,
  space,
  typography,
  color,
} from 'styled-system';

const getDerivedProps = (props) => {
  const {
    theme: {
      space, fontWeights,
      colors: {
        red, black, white, grayDark, grayLight
      }, borderCurved, borderRounded,
    },
    error,
    borderType,
    withBottomBorderOnly
  } = props;
  // baseline styles
  
  const styles = {
    color: error ? red : black,
    width: '100%',
    height: '8.25rem',
    boxSizing: 'border-box',
    padding: `${space[7]} ${space[7]}`,
    letterSpacing: 1,
    lineHeight: 1,
    fontSize: `${space[7]}`,
    fontWeight: `${fontWeights[2]}`,
    backgroundColor: 'transparent',
    borderColor:'',
    borderBottom:'',
    border:'',
    '::placeholder':{
      color: grayDark,
      opacity: 1,
    },
    '&:disabled':{
      backgroundColor: grayLight,
      border: 'none'
    }
  };
  // conditional styles
  if(withBottomBorderOnly){
    // styles.border = 'none';
    styles.borderColor= 'transparent';
    styles.borderBottom = `1px solid ${error ? red : black}`
  }
  else{
    styles.border = `1px solid ${error ? red : black}`
  }
  return styles;
};

export const TextArea = styled.textarea(
  (props) => getDerivedProps(props),
  compose(border, layout, space, typography, color)
);

export const InputWrapper = styled.div`
  height: 'auto';
  position:relative;
  width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'block')};
  ${
  props => props.rightIcon &&
  `position:relative;
  `};
  ${
  props => props.leftIcon &&
  `position:relative;
   
   & > input{
     padding-left: 40px
   }
  `};
`;

export const LeftIcon = styled.span`
  position: absolute;
  right: calc(100% - ${props => props.theme.space[12]});
  width: ${props => props.theme.space[9]};
  top: calc(100% - ${props => props.theme.space[11]});
  font-size: ${props => props.theme.space[7]};
  z-index: 20;
  text-decoration: none;
  cursor:pointer;
  background-color: transparent !important;
  padding: 0;
  border: none;
  box-shadow: none;
`
export const ValidationIcon = styled.span`
  position: absolute;
  left: ${props => props.position === 'inside' ? 
  `calc(100% - ${props.theme.space[12]})`: `calc(100% + ${props.theme.space[2]})`};
  width: ${props => props.theme.space[9]};
  top: ${props => props.theme.space[7]};
  color: ${props => (props.isValid ? 'green': 'red')};
  font-size: ${props => props.theme.space[7]};
`;