import { Story, Meta } from '@storybook/react';
import {  Progressbar, ProgressbarProps   }  from './progressbar';

export default {
  component: Progressbar,
  title: 'Progressbar'
} as Meta ;

const Template: Story<ProgressbarProps> = (args) =>
     <>
      <Progressbar progressbarheading='Progress' progressbarstatus={100} />
      <Progressbar progressbarheading='Progress' progressbarstatus={60} />
      <Progressbar progressbarheading='Progress' progressbarstatus={20} />
      <Progressbar progressbarheading='Progress' progressbarstatus={90} />
      <Progressbar progressbarheading='Progress' progressbarstatus={70} />
      <Progressbar progressbarheading='Progress' progressbarstatus={50} />
      <Progressbar progressbarheading='Progress' progressbarstatus={30} />
     </>

export const Primary = Template.bind({})
Primary.args = {
}