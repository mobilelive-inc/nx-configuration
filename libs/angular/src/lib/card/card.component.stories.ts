import { Meta, Story } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  props: args
})

export const Card = Template.bind({});

