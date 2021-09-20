import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, InputContainer, Flex
} from './css';
import Span from '../span';
import Label from '../label';

interface CheckboxProps {
    name?: string; 
    value?: string;
    label?: string; 
    backgroundColor?: string; 
    color?: string; 
    errorMessage?: string;
    isFilled?: boolean;
    variant?: string;
    onChange?: () => void;
    borderType?:string
    className?:string
    checkedIconClass?:string;
    id?:string
    border?:string
}
const Checkbox:React.FC<CheckboxProps> =(props) =>{
  const {
    id,
    label,
    className,
    onChange,
    name,
    errorMessage,
    backgroundColor,
    color,
    border,
    isFilled,
    checkedIconClass,
    variant,
    borderType
  } = props;
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="checkbox">
      <InputContainer
        variant={variant}
        error={errorMessage}
        bg={backgroundColor}
        className={className}
        isFilled={isFilled}
        border={border}
        borderType={borderType}
        color={color}>
        {variant === 'checked' && (
          <Span
            className={checkedIconClass}/>
        )}
        <Input
          checked={variant === 'checked'}
          disabled={isDisabled}
          id={name}
          name={name}
          onChange={onChange}/>
      </InputContainer>
      <Label
        htmlFor={id}
        error={errorMessage}
        pl={[10]}
        mt='-22px'
        lineHeight={5}
        fontWeight={600}
        color={errorMessage && !isChecked ? 'error' : 'black'}
        // fontWeight={isChecked ? [2] : [0]}
        as="label">
        {label}
      </Label>
    </Flex>
  );
}
Checkbox.defaultProps = {
  variant: 'unchecked',
  onChange: () => undefined,
  errorMessage: ''
};

export default Checkbox; 