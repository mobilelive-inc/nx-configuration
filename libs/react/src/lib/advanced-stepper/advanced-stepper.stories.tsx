import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import AdvancedStepper   from './advanced-stepper';
import { ThemeProvider } from 'styled-components';
import Button from '../button/button';
import Text from '../typography';
import Container from '../container';
import advancedStepperTheme from '../theme/styles/advancedStepper';
import GlobalStyle from '../theme/globalStyles';
import '../icomoon_icons.css';
import { Flex } from 'rebass/';

export default {
  component: AdvancedStepper,
  title: 'AdvancedStepper'
} as Meta ;
export const Example= (args):JSX.Element  => {
    const [count, setCount] = useState<number>(1);
    return (
      <ThemeProvider theme={advancedStepperTheme}>
        <GlobalStyle />
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <AdvancedStepper value={count} total={5} variant='primary' {...args}/>
          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              {...args}>
              Previous
            </Button>
            <Button
              disabled={count === 5}
              variant={count === 5 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 5) {
                  setCount(count + 1);
                }
              }}
              {...args}>
              Next
            </Button>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  };
  Example.args ={
    total: 3,
    value: 1,
    hideName: true,
    dataList: []
  };
  export const StepperThemes = (args) => {
    const [count, setCount] = useState<number>(1);
    return (
      <ThemeProvider theme={advancedStepperTheme}>
        <GlobalStyle />
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <Text>Primary Theme</Text>
          <AdvancedStepper variant="primary" value={count} total={5} {...args} />
          <Text>Secondary Theme</Text>
          <AdvancedStepper variant="secondary" value={count} total={5} {...args}/>
          <Text>Success Theme</Text>
          <AdvancedStepper variant="success" value={count} total={5}  {...args}/>
          <Text>Dark Theme</Text>
          <AdvancedStepper variant="danger" value={count} total={5}  {...args}/>
          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              {...args}>
              Previous
            </Button>
            <Button
              disabled={count === 5}
              variant={count === 5 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 5) {
                  setCount(count + 1);
                }
              }}
              {...args}>
              Next
            </Button>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  };

  StepperThemes.args ={
    total: 3,
    value: 1,
    hideName: true,
    dataList: []
  };

