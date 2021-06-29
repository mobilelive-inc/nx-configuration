import { Meta, Story } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

export default {
  title: 'AccordionComponent',
  component: AccordionComponent
} as Meta;

const Template: Story<AccordionComponent> = (args) => ({
  props: args
})

export const Accordian = Template.bind({})
