import { render } from '@testing-library/react';
import {
  PrimaryButtons,
  OutlineButtons,
  ClearButtons,
  RoundedButtons,
  RoundedOutlineButtons,
  CurvedButtons,
  CurvedOutlineButtons,
  FilledSocialButtons,
  OutlineSocialButtons,
  TestButton
} from "./buttons";

describe('Buttons', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PrimaryButtons/>);
    expect(baseElement).toBeTruthy();
  });
});
