import * as React from 'react';
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
    width?:string | number | string[] | number[]
    height?:string | number | string[] | number[]
    id?:string
    name?:string
    value?:string
    placeholder?:string
    onRightIconButtonClick?:string
    rightIcon?:string
    errorMessage?:string
    leftIcon?:string
    onLeftIconClick?:()=>void
    borderType?:string
    withBorderBottomOnly?:boolean
    validationIcon?:string
    isValid?:boolean
    chevron?:string
    onChange?: (e) => void;
    disabled?:boolean
    backgroundColor?:string
    color?:string
    borderRadius?:string | number | string[] | number[]
    fontWeight?:string | number | string[] | number[]
    textAlign?:string | number | string[] | number[]
    border?:string
    m?:string | number | string[] | number[]
    p?:string | number | string[] | number[]
    children?: React.ReactNode
    position?: string
    as?: string
    fontSize?: string | number | string[] | number[]
    lineHeight?:string | number | string[] | number[]
    pl?: number
    mt?: number 
    pt?: number
    ml?:number
    borderColor?: string
    boxSizing?: string
    cursor?: string
    padding?: string 
    '-moz-appearance'?: string
    '-webkit-appearance'?: string
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