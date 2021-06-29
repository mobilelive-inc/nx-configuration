import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
    title: 'ButtonComponent',
    component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
    props: args
})

export const Button = Template.bind({});