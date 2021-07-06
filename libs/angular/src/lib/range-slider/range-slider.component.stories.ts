import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RangeSliderComponent } from './range-slider.component';

export default {
  title: 'RangeSliderComponent',
  component: RangeSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RangeSliderComponent>;

const Template: Story<RangeSliderComponent> = (args: RangeSliderComponent) => ({
  component: RangeSliderComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    displayWith: '' ,
    showMinMaxLabels:  false,
    disabled:  '',
    tabIndex:  0,
    invert:  false,
    max:  0,
    min:  0,
    step:  0,
    thumbLabel:  false,
    tickInterval:  '',
    value:  40,
}