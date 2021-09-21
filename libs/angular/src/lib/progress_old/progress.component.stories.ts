import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProgressComponent } from './progress.component';

export default {
  title: 'ProgressComponent',
  component: ProgressComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProgressComponent>;

const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  component: ProgressComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    min:  0,
    max:  100,
    value:  0,
    showLabel:  false,
    displayWith: true ,
}