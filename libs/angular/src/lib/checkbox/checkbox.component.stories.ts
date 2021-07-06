import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CheckboxComponent>;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    value: 'red' ,
    name:  '',
    disabled:  false,
    binary:  false,
    label:  '',
    ariaLabelledBy:  '',
    tabindex:  0,
    inputId:  '',
    style: {} ,
    styleClass:  '',
    labelStyleClass:  '',
    formControl: '' ,
    checkboxIcon:  '',
    readonly:  false,
    required:  false,
}