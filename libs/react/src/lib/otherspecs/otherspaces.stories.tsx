import { Story, Meta } from '@storybook/react';
import {  OtherSpecs, Typography}  from './otherspecs';

export default {
  component: OtherSpecs,
  title: 'OtherSpecs'
} as Meta ;

const Template: Story = (args) => <OtherSpecs {...args} />;
const TemplateTwo: Story = (args) => <Typography {...args}/>;
export const Typo_grapy = TemplateTwo.bind({})
export const Specs = Template.bind({})
Specs.args = {
}
