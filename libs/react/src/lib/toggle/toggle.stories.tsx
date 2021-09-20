import React,{useState} from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Toggle from "./toggle";
import Text from '../typography';
import  Theme from '../theme/defaultTheme'
import GlobalStyle from '../theme/globalStyles';
import '../icomoon_icons.css';
import {
  Flex, Box
} from 'rebass/styled-components'

export default {
  title: 'Toggle Button',
  component: Toggle,
};

export const ToggleButton = (args) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isOnLabeled, setIsOnLabeled] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);
  const [toggleLabeled, setToggleLabeled] = useState<boolean>(false);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H5" ml={10} {...args}>Toggle Buttons</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          isToggled={isOn}
          onChange={() => {setIsOn(!isOn)}}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          isToggled={true}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2"
          size='sm'
          isToggled={toggle}
          onChange={() => {setToggle(!toggle)}}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1" 
          size='sm'
          isToggled={true}
          {...args}
          />
        </Box>
      </Flex>
      <Text variant="H5" ml={10} {...args}>Toggle Buttons With Label</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1Labeled"
          size='lg'
          styles= {{
            toggledOffBgColor: '#B3B3B3',
            toggledOffBorderColor: '#B3B3B3',
            toggledOnBgColor:'#34A84D',
            toggledOnBorderColor: '#34A84D',
            switchOnColor: 'white',
            switchOffColor: 'white',
          }}
          isToggled={isOnLabeled}
          label={isOnLabeled ? "ON":"OFF"}
          onChange={() => {setIsOnLabeled(!isOnLabeled)}}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          styles= {{
            toggledOffBgColor: '#34A84D',
            toggledOffBorderColor: '#B3B3B3',
            toggledOnBorderColor: '#34A84D',
            switchOnColor: 'white',
            switchOffColor: 'white',
          }}
          label={"ON"}
          isToggled={true}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2Labled"
          size='sm'
          isToggled={toggleLabeled}
          label={toggleLabeled ? "ON":"OFF"}
          onChange={() => {setToggleLabeled(!toggleLabeled)}}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1error"
          size='sm'
          isToggled={true}
          label={"ON"}
          {...args}
          />
        </Box>
      </Flex>
      <Text variant="H5" ml={10} {...args}>Toggle Buttons Error States</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1Labelederror"
          size='lg'
          error
          isToggled={false}
          label="OFF"
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          error
          label={"ON"}
          isToggled={true}
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2Lablederror" 
          error
          size='sm'
          isToggled={false}
          label="OFF"
          {...args}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1error" 
          error
          size='sm'
          isToggled={true}
          label={"ON"}
          {...args}
          />
        </Box>
      </Flex>
    </ThemeProvider>
  )
};
ToggleButton.args = {
    id: 'toggle',
    isToggled: false,
    size: 'lg',
    styles: {
      toggledOnBgColor: 'white',
      toggledOffBorderColor: '#B3B3B3',
      toggledOnBorderColor: '#B3B3B3',
      switchOnColor: '#34A84D',
      switchOffColor: '#B3B3B3',
    }
}