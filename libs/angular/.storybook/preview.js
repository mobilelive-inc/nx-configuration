import { addDecorator } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular'

addDecorator(componentWrapperDecorator((story) => `<div style="margin: 1em">${story}</div>`));
