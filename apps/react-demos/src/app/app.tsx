import * as React from "react";
import {
  PrimaryButtons,
  OutlineButtons,
  ClearButtons,
  RoundedButtons,
  RoundedOutlineButtons,
  CurvedButtons,
  CurvedOutlineButtons,
  FilledSocialButtons,
  OutlineSocialButtons
} from "@nx-configuration/react";

export function App() {
  return (
    <>
      <h2>Primary Buttons</h2>
      <PrimaryButtons/>

      <h2>Clear Buttons</h2>
      <ClearButtons/>

      <h2>Rounded Buttons</h2>
      <RoundedButtons/>

      <h2>Outline Buttons</h2>
      <OutlineButtons/>

      <h2>CurvedOutline Buttons</h2>
      <CurvedOutlineButtons/>

      <h2>Curved Buttons</h2>
      <CurvedButtons/>

      <h2>RoundedOutline Buttons</h2>
      <RoundedOutlineButtons/>

      <h2>FilledSocial Buttons</h2>
      <FilledSocialButtons/>

      <h2>OutlineSocial Buttons</h2>
      <OutlineSocialButtons/>

      {/*<h2>ButtonsWi thIcons</h2>*/}
      {/*<ButtonsWithIcons/>*/}

      {/*<h2>iconOnly Button</h2>*/}
      {/*<iconOnlyButton/>*/}

      {/*<h2>Buttons AsTooltips</h2>*/}
      {/*<buttonsAsTooltips/>*/}

    </>
  );
}

export default App;
