import React from 'react';
import PropTypes from 'prop-types';
import {
  Input as BaseInput, InputWrapper, ValidationIcon,
} from './css';
import { Text } from '../typography';

export interface InputProps{
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
    onChange?:(any)=> void;
    onBlur?:(any)=> void;
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
    <>
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
          // eslint-disable-next-line react/jsx-props-no-spreading
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
    </>
  );
};

export default Input;