import React from 'react';
import {
  Input, InputContainer, Flex, InnerBox
} from './css';
import Label from '../label';

interface RadioProps{
    name?: string; 
    value?: string;
    label?: string; 
    backgroundColor?: string;
    color?: string;
    checkedIconClass?: string;
    variant?: string;
    onChange?: () => void;
    id?:string;
    testId?:string;
    error?:string;
    className?:string
    borderType?:string
}
const Radio:React.FC<RadioProps> = (props) => {
  const {
    id,
    label,
    onChange,
    name,
    testId,
    error,
    color,
    variant,
    className,
    borderType,
    ...restProps
  } = props;
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="radio">
      <InputContainer
        variant={variant}
        error={error}
        borderType={borderType}
        className={className}
        color={color}
        {...restProps}>
        {variant === 'checked' && (
          <InnerBox color={color} borderType={borderType} error={error}></InnerBox>
        )}
        <Input
          checked={variant === 'checked'}
          disabled={isDisabled}
          id={name}
          testId={testId}
          name={name}
          onChange={onChange}/>
      </InputContainer>
      <Label
        htmlFor={id}
        error={error}
        pl={[10]}
        mr={7}
        mt='-22px'
        lineHeight={5}
        fontWeight={600}
        color={error ? 'error' : 'black'}
        as="label">
        {label}
      </Label>
    </Flex>
  );
}

export default Radio;