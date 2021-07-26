import React from 'react';
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
import Container from './components/container';
export function App() {
  return (
   <div>
     
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
   </div>
  );
}

export default App;
