import { Story, Meta } from '@storybook/react';
import { React, ReactProps } from './react';

export default {
  component: React,
  title: 'React',
} as Meta;

const Template: Story<ReactProps> = (args) => <React {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
