import styled from 'styled-components';
import {
  compose,
  border,
  layout,
  space,
  typography,
  color,
} from 'styled-system';
import css from '@styled-system/css';

const getDerivedProps = (props) => {
  const {
    theme: {
       borderCurved, borderRounded,
    },
    error,
    borderType,
    withBottomBorderOnly
  } = props;

  // baseline styles
  
  const styles = css({
    color: error ? 'errorMessage' : 'priamryText',
    width: 'inputItemWidth',
    height: 'inputItemHeight',
    boxSizing: 'border-box',
    padding: 'inputPadding',
    fontSize: 'inputHeadingTextFontSize',
    backgroundColor: 'transparent',
    border:0,
    boxShadow:' 0 1px 0 0',
    transition: 'ease-out 0.2s',
    borderRadius :'',
    borderColor:'',
    '::placeholder':{
      color: 'placeholderColor',
      opacity: 1,
    },
    '&:disabled':{
      backgroundColor: 'disableColor',
      border: 'none'
    },
    '&:focus':{
      outline: 'none'
    }
  });
  // conditional styles
  if(!withBottomBorderOnly && borderType && borderType === 'curved'){
    styles.borderRadius = borderCurved
  }
  if(!withBottomBorderOnly && borderType && borderType === 'rounded'){
    styles.borderRadius = borderRounded
  }
  if(withBottomBorderOnly){
    styles.borderColor= 'transparent';
    styles.borderBottom = `1px solid ${ error ? 'errorMessage' : 'priamryText'}`
  }
  else{
    styles.border = `1px solid ${ error ? 'errorMessage' : 'priamryText'}`
  }
  return styles;
};

export const Input = styled.input(
  (props) => getDerivedProps(props),
  compose(border, layout, space, typography, color)
);
export const InputWrapper = styled.div`
  height: 'auto';
  width: ${props => (props.width ? props.width : 'inputItemWidth')};
  display: ${props => (props.display ? props.display : 'block')};
 `
export const ValidationIcon = styled.span`
  position: absolute;
  left: calc(100% + 10px);
  width: 20px;
  top: calc(100% - 25px);
  color: ${props => ( props.isValid ? 'errorMessage' : 'priamryText')};
  font-size: 'inputHeadingTextFontSize;
`;