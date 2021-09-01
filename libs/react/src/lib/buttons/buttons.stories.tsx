import { Story, Meta } from '@storybook/react';
import { Buttons} from './buttons';
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
} from './buttons';

export default {
  component: Buttons,
  title: 'Buttons'
} as Meta ;

const primarybutton: Story = (args) => <PrimaryButton {...args} />;

export const Primary_Button = primarybutton.bind({})

Primary_Button.args = {

}

const outlinebuttons: Story = (args) => <OutlineButtons {...args} />;

export const Outline_Buttons = outlinebuttons.bind({})

Outline_Buttons.args = {

}

const clearbutton: Story = (args) => <ClearButton {...args} />;

export const Clear_Button = clearbutton.bind({})

Clear_Button.args = {

}

const roundedbuttons: Story = (args) => <RoundedButtons {...args} />;

export const Rounded_Buttons = roundedbuttons.bind({})

Rounded_Buttons.args = {

}

const  roundedoutlinebuttons: Story = (args) => <RoundedOutlineButtons {...args} />;

export const  Rounded_Outline_Buttons = roundedoutlinebuttons.bind({})

Rounded_Outline_Buttons.args = {

}
const  curvedbuttons: Story = (args) => <CurvedButtons {...args} />;

export const  Curved_Buttons = curvedbuttons.bind({})

Curved_Buttons.args = {

}

const  curvedoutlinebuttons: Story = (args) => <CurvedOutlineButtons {...args} />;

export const  Curved_Outline_Buttons = curvedoutlinebuttons.bind({})

Curved_Outline_Buttons.args = {

}

const  filledsocialbuttons: Story = (args) => <FilledSocialButtons {...args} />;

export const  Filled_Social_Buttons = filledsocialbuttons.bind({})

Filled_Social_Buttons.args = {

}

const  outlinesocialbuttons: Story = (args) => <OutlineSocialButtons {...args} />;

export const  Outline_Social_Buttons = outlinesocialbuttons.bind({})

Outline_Social_Buttons.args = {

}