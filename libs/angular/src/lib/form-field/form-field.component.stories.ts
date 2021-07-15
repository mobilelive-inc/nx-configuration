import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';

export default {
  title: 'FormFieldComponent',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FormFieldComponent>;

const Template: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  component: FormFieldComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    label:  '',
    hideRequiredMarker:  false,
    iconLeft:  '',
    iconRight:  '',
    clearBtn:  false,
}