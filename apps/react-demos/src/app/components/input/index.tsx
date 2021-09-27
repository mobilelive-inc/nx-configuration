import React from 'react';
import {
  Input as BaseInput, InputWrapper, ValidationIcon, 
} from './css';
import { Text } from '../typography';
import GlobalStyle from '../theme/globalStyles';
import inputTheme from '../theme/styles/input';
import {ThemeProvider} from 'styled-components';

interface InputProps{
    type?: string;
    value?: string;
    placeholder?: string;
    label?: string;
    id?: string;
    showErrorMessage?: true;
    errorMessage?: string;
    isClearButtonVisible?: true;
    mt?: number;
    clearButtonClasses?: string;
    onClear?: () => void;
    withBottomBorderOnly?: true;
    disabled?: boolean;
    onChange?:(event:any)=>void
    onBlur?:string
    error?:boolean
    isValid?:boolean
    leftIcon?:string
    leftIconBtn?:string
    onLeftIconBtnClick?:string
    rightIcon?:string
    width?:string
    display?:string
    rightIconClick?:string
    validationIcon?:string
    borderType?:string
    rows?:string
    cols?:string
    iconPosition?:string
    bottomValidationIcon?:string
    
}
const Input:React.FC<InputProps> = (props) => {
  const {
    id,
    placeholder,
    value,
    type,
    onChange,
    onBlur,
    error,
    errorMessage,
    isValid,
    disabled,
    leftIcon,
    leftIconBtn,
    onLeftIconBtnClick,
    rightIcon,
    width,
    display,
    rightIconClick,
    validationIcon,
    ...restProps
  } = props;
  
  return (
    <ThemeProvider theme={inputTheme}>
    <GlobalStyle/>
      <InputWrapper rightIcon={rightIcon} leftIcon={leftIcon} width={width} display={display}>
        <BaseInput
          id={id}
          placeholder={placeholder}
          error={error}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          mt={5}
          {...restProps}/>
        {
          validationIcon && (
            <ValidationIcon className={validationIcon} isValid={isValid}/>
          )
        }
      </InputWrapper>
      <div>
        {error && errorMessage && (
          <Text
            as="p"
            color="red"
            fontSize="10px"
            lineHeight="1px"
            pl={3}
            pt={0}>{errorMessage}</Text>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Input;