import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Buttons } from './buttons';
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
} from './buttons';

export default {
  component: Buttons,
  title: 'Buttons'
} as Meta;

const primaryButtons: Story = (args) => <PrimaryButtons {...args} />;

export const Primary_Buttons = primaryButtons.bind({})

Primary_Buttons.args = {}

const outlineButtons: Story = (args) => <OutlineButtons {...args} />;

export const Outline_Buttons = outlineButtons.bind({})

Outline_Buttons.args = {}

const clearButtons: Story = (args) => <ClearButtons {...args} />;

export const Clear_Buttons = clearButtons.bind({})

Clear_Buttons.args = {}

const roundedButtons: Story = (args) => <RoundedButtons {...args} />;

export const Rounded_Buttons = roundedButtons.bind({})

Rounded_Buttons.args = {}

const roundedOutlineButtons: Story = (args) => <RoundedOutlineButtons {...args} />;

export const Rounded_Outline_Buttons = roundedOutlineButtons.bind({})

Rounded_Outline_Buttons.args = {}
const curvedButtons: Story = (args) => <CurvedButtons {...args} />;

export const Curved_Buttons = curvedButtons.bind({})

Curved_Buttons.args = {}

const curvedOutlineButtons: Story = (args) => <CurvedOutlineButtons {...args} />;

export const Curved_Outline_Buttons = curvedOutlineButtons.bind({})

Curved_Outline_Buttons.args = {}

const filledSocialButtons: Story = (args) => <FilledSocialButtons {...args} />;

export const Filled_Social_Buttons = filledSocialButtons.bind({})

Filled_Social_Buttons.args = {}

const outlineSocialButtons: Story = (args) => <OutlineSocialButtons {...args} />;

export const Outline_Social_Buttons = outlineSocialButtons.bind({})

Outline_Social_Buttons.args = {}

// const testButton: Story = (args) => <TestButton variant={args} onClick={action('my component clicked')} />
//
// export const Test_Button = testButton.bind({})
//
// Test_Button.argTypes = {
//   variant: {
//     options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'disabled'],
//     control: {type: 'radio'},
//   },
//   onClick: {action: 'clicked'}
// }
