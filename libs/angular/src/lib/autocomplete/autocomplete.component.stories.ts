import { Meta, Story } from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';

export default {
  title: 'AutocompleteComponent',
  component: AutocompleteComponent
} as Meta;

const Template: Story<AutocompleteComponent> = (args) => ({
  props: args
})

export const AutoComplete = Template.bind({});

