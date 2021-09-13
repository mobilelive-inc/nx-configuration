import * as React from 'react';
import PropTypes from 'prop-types';
import {
  BaseSelect,
  SelectWrapper,
  RightIconButton,
  LeftIconButton,
  ChevronDownIcon,
  ValidationIcon
} from './css';
import Text from '../typography';
import Option from '../option';

interface SelectProps{
    width?:string
    height?:string
    id?:string
    name:string
    value:string
    placeholder:string
    onRightIconButtonClick?:string
    rightIcon:string
    errorMessage:string
    leftIcon:string
    onLeftIconClick:()=>void
    borderType:string
    withBorderBottomOnly:boolean
    validationIcon:string
    isValid?:string
    chevron?:string
    onChange:(e:Event)=> void 
    disabled?:boolean
    backgroundColor:string
    color:string
    borderRadius:string
    children?: React.ReactElement
    position?: string
    as: string
    fontSize: string
    lineHeight: string
    pl: number
    mt: number 
    pt: number
    borderColor?: string
    boxSizing: string
    cursor: string
    padding: string 
    '-moz-appearance': string
    '-webkit-appearance': string
}

const Select:React.FC<SelectProps> = props => {
  const {
    children,
    width,
    id,
    name,
    value,
    placeholder,
    onRightIconButtonClick,
    rightIcon,
    errorMessage,
    leftIcon,
    onLeftIconClick,
    borderType,
    withBorderBottomOnly,
    validationIcon,
    isValid,
    chevron,
    onChange,
    ...restProps
  } = props;
  return (
    <>
      <SelectWrapper width={width} leftIcon={leftIcon}>
        {leftIcon && (
          <LeftIconButton onClick={onLeftIconClick}>
            <span className={leftIcon} />
          </LeftIconButton>
        )}
        <BaseSelect
          {...restProps}
          id={id}
          name={name}
          value={value}
          error={errorMessage}
          borderType={borderType}
          withBorderBottomOnly={withBorderBottomOnly}
          onChange={onChange}>
          {placeholder && <Option>{placeholder}</Option>}
          {children}
        </BaseSelect>
        {chevron && <ChevronDownIcon className={chevron} />}
        {rightIcon && (
          <RightIconButton onClick={onRightIconButtonClick}>
            <span className={rightIcon} />
          </RightIconButton>
        )}
        {validationIcon && (
          <ValidationIcon className={validationIcon} isValid={isValid} />
        )}
      </SelectWrapper>
      {errorMessage && (
        <Text
          position="absolute"
          as="p"
          color={errorMessage ? 'error' : 'black'}
          fontSize="16px"
          lineHeight="1px"
          pl={3}
          mt={17}
          pt={0}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};
export default Select
