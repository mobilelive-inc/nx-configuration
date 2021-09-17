import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  OutlineButtons,
  ClearButton,
  RoundedButtons,
  RoundedOutlineButtons,
  CurvedButtons,
  CurvedOutlineButtons,
  FilledSocialButtons,
  OutlineSocialButtons
} from './components/buttoncontiner';
import { Text } from './components/typography'
import Container from './components/container';
import { MainContainer } from './components/container';
import theme, { colors } from './components/theme/defaultTheme';
import AdvancedStepper from './components/advanced-stepper';
import { Flex, Box } from 'rebass/styled-components';
import Button from './components/button';
import { OtherSpecs, Typography } from './components/otherspecs';
import SkipLink from './components/skiplink';
import Stepper from './components/stepper';
export function App() {
   const [count, setCount] = useState<number>(1);
  return (
      <ThemeProvider theme={theme}>
      <Box
        p={25}
        bg={colors.bgLight}
        justifyContent="center"
        alignItems="center">
        <MainContainer>
          <Text  bold fontSize="fontSizeH1">
            React Components Demo
          </Text>
          <Text fontSize="fontSizeBase">
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </Text>
        </MainContainer>
      </Box>
       <MainContainer>
        <Text fontSize="fontSizeH2">Primary Buttons</Text>
        <Container>
          <PrimaryButton />
        </Container>

        <Text fontSize="fontSizeH2">Outline Buttons</Text>
        <Container>
          <OutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Clear Buttons</Text>
        <Container>
          <ClearButton />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Buttons</Text>
        <Container>
          <RoundedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Outline Buttons</Text>
        <Container>
          <RoundedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Buttons</Text>
        <Container>
          <CurvedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Outline Buttons</Text>
        <Container>
          <CurvedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Filled Social Buttons</Text>
        <Container>
          <FilledSocialButtons />
        </Container>

        <Text fontSize="fontSizeH2">Outline Social Buttons</Text>
        <Container>
          <OutlineSocialButtons />
        </Container>
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <AdvancedStepper
            variant="primary"
            value={count}
            total={3}
            hideName={true}
            dataList={['Option 1', 'Option 2', 'Option 3']}
          />
          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              Previous
            </Button>
            <Button
              disabled={count === 3}
              variant={count === 3 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 3) {
                  setCount(count + 1);
                }
              }}>
              Next
            </Button>
          </Flex>
        </Container>
        <Text fontSize="fontSizeH2">Typography</Text>
        <Container>
          <Typography />
        </Container>
        <Text fontSize="fontSizeH2">OtherSpecs</Text>
        <Container>
          <OtherSpecs />
          </Container>
        <Text fontSize="fontSizeH2">Skip Navigation</Text>
        <Container>
          <div style={{ height: '100px', background: colors.primary }}></div>
          <SkipLink
            href="#"
            focusableID="newId"
            title="Skip"
            top={150}
            border="none"
            backgroundColor="blue"
            color="white"
          />
        </Container>
        <Text fontSize="fontSizeH2">Stepper</Text>
        <Container>
          <Stepper
            variant="primary"
            value={85}
            total={100}
            isCountVisible={true}
          />
        </Container>
        </MainContainer>
        </ThemeProvider>
  );
}

export default App;
