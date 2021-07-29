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
          <h1>
            React Components Demo
          </h1>
          <p>
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </p>
        </MainContainer>
      </Box>
       <MainContainer>
        <h2>Primary Buttons</h2>
        <Container>
          <PrimaryButton />
        </Container>

        <h2>Outline Buttons</h2>
        <Container>
          <OutlineButtons />
        </Container>

        <h2>Clear Buttons</h2>
        <Container>
          <ClearButton />
        </Container>

        <h2>Rounded Buttons</h2>
        <Container>
          <RoundedButtons />
        </Container>

        <h2>Rounded Outline Buttons</h2>
        <Container>
          <RoundedOutlineButtons />
        </Container>

        <h2>Curved Buttons</h2>
        <Container>
          <CurvedButtons />
        </Container>

        <h2>Curved Outline Buttons</h2>
        <Container>
          <CurvedOutlineButtons />
        </Container>

        <h2>Filled Social Buttons</h2>
        <Container>
          <FilledSocialButtons />
        </Container>

        <h2>Outline Social Buttons</h2>
        <Container>
          <OutlineSocialButtons />
        </Container>
        </MainContainer>
        </ThemeProvider>
  );
}

export default App;
