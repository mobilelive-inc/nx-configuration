import React from 'react';
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
import {Box } from 'rebass/styled-components';
import Container from './components/container';
import { MainContainer } from './components/container';
import theme, { colors }  from './components/theme/defaultTheme';

export function App() {
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
        </MainContainer>
        </ThemeProvider>
  );
}

export default App;
