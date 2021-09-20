import * as React from 'react';
import Box from '../box';
import {
  Label,
  ToggleLable,
  HiddenCheckbox,
  InnerBox,
  Flex,
  CheckIconContainer,
} from './css';

interface ToggleProps{
    shortDescription: string; 
    id?: string;
    size: string;
    isToggled: boolean;
    error?: boolean; 
    label?: string; 
    onChange?: (e?:boolean) => void;
    className?:string
    identity?:string
    children?:React.ReactNode
     styles?:{ 
         toggledOnBgColor?: string;
         toggledOffBorderColor?: string; 
         toggledOnBorderColor?: string; 
         switchOnColor?: string;
         itchOffColor?: string; 
         toggledOffBgColor?:string
         switchOffColor?:string    
         toggledOffBorder?:string
         toggledOnBorder?:string
         id?:string 
         label?:string
    };
}

const Toggle:React.FC<ToggleProps> = (props) => {
  const { 
        id, isToggled, onChange,
        styles : { 
        toggledOnBgColor,
        toggledOffBgColor,
        toggledOnBorderColor,
        toggledOffBorderColor,
        switchOnColor,
        switchOffColor},
        className,
        label,
        size,
        error 
      } = props;
  return (
    <Flex alignItems="center">
      <Box  style={{borderRadius:'50px'}}>
        <Label htmlFor={id}>
          <HiddenCheckbox
            onChange={(e) => {onChange(e)}}
            id={id}
            aria-labelledby={id}
            aria-checked={isToggled}
          />
          <InnerBox toggleStatus={isToggled} 
            className={`toggle-box ${className}`}
            toggledOnBgColor={toggledOnBgColor}
            toggledOffBgColor={toggledOffBgColor}
            switchOnColor={switchOnColor}
            switchOffColor={switchOffColor}
            toggledOnBorder={`2px solid ${toggledOnBorderColor}`}
            toggledOffBorder={`2px solid ${toggledOffBorderColor}`}
            isError={error}
            size={size}
            >
            <CheckIconContainer toggleStatus={"toggleState"}>
              <span className="icon_checkmark" />
            </CheckIconContainer>
          </InnerBox>
        </Label>
      </Box>
      {
        label && <Box style={{marginLeft:16}}>
        <ToggleLable
          ml="40px"
          fontSize="16px"
          fontWeight={600}
          as="label"
          htmlFor={id}
          error={error}
          cursor= 'pointer'
        >
          {label}
        </ToggleLable>
      </Box>
      }
    </Flex>
  );
}

export default Toggle;