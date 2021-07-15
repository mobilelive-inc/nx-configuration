import styles from './app.module.scss';
import Progress from './components/progress';
import { ContainerDiv, Div } from './components/progress/css';
import Container from './components/container';
import { Flex, Box } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../app/components/theme/defaultTheme';
import {Text} from './components/typography';
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
} from './components/ButtonContainer';
export function App() {
  return (
    <ThemeProvider theme={theme}>
    <Div>
        <h1>
          React Components Demo
        </h1>
        <p>
          Here are all the components we have built in React for Friday Design
          System. Below are the examples we have formed here using these
          componenet. We tried to implement all the usabily cases for every
          component
        </p>

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
      <h2>Progressbar</h2>
        <ContainerDiv>
          <Progress progressbarheading='Progress' progressbarstatus={80} />
        </ContainerDiv>
    </Div>
    </ThemeProvider>
  );
}

export default App;
