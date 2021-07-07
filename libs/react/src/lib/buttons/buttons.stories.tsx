import { Story, Meta, } from '@storybook/react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Buttons, ButtonsProps } from './buttons';
import {
    PrimaryButton,
    OutlineButtons,
    ClearButton,
    RoundedButtons,
    RoundedOutlineButtons,
    CurvedButtons,
    CurvedOutlineButtons,
    FilledSocialButtons,
    OutlineSocialButtons
  } from './buttons';
  import {
    fontSizes,
    fontWeights,
    lineHeights,
    radii
  } from '../../theme/defaultTheme';
// import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { CustomDocumentationComponent } from './CustomDocumentationComponent';

export default {
    component: Buttons,
    title: 'Buttons',
    parameters: { 
        docs: { 
          page: CustomDocumentationComponent, 
        } 
      },
  } as Meta ;

const Template: Story<ButtonsProps> = (args) =>(<PrimaryButton />);

export const Primary_Buttons = Template.bind({})
Primary_Buttons.args = {
  /** Text for Button could be string or node. */
    disabled:false,
    fontSize: [fontSizes.fontSizeSM, fontSizes.fontSizeBase],
    lineHeight: [lineHeights.lineheight_1x_tiny],
    m: [0],
    fontWeight: [fontWeights.fontweight_medium],
    /** display: ['inline-block'], */
    width: [1],
    textAlign: ['center'],
    borderRadius: [radii.borderRadiusNone],
    onClick: () => {},
    withIcon: false,
};

Primary_Buttons.propTypes = {
  /** Text for Button could be string or node. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  /** Click handler for Button */
  onClick: PropTypes.func,
  /** Option to disable Button */
  disabled: PropTypes.bool,
  /** button variant consumes buttons object in the theme file */
  variant: PropTypes.string,
  /** The props needs to be passed in when using icons in buttons */
  withIcon: PropTypes.bool,
  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** The display property specifies the display behavior (the type of rendering box) of an element. */
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines width of button. Accepts responsive value from theme */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines height of button. Accepts responsive value from theme */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines border radius on the button. Accepts responsive value from theme. */
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines button's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,
  color: PropTypes.string,
  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ])
};


const Template_Two: Story<ButtonsProps> = (args) =>(<OutlineButtons />);

export const Outline_Buttons = Template_Two.bind({})
Outline_Buttons.args = {
}

const Template_Three: Story<ButtonsProps> = (args) =>(<ClearButton />);

export const Clear_Buttons = Template_Three.bind({})
Clear_Buttons.args = {
}

const Template_Four: Story<ButtonsProps> = (args) =>(<RoundedButtons/>);

export const Rounded_Buttons = Template_Four.bind({})
Rounded_Buttons.args = {
}

const Template_Five: Story<ButtonsProps> = (args) =>(<RoundedOutlineButtons/>);

export const RoundedOutline_Buttons = Template_Five.bind({})
RoundedOutline_Buttons.args = {
}
const Template_Six: Story<ButtonsProps> = (args) =>(<CurvedButtons/>);

export const Curved_Buttons = Template_Six.bind({})
Curved_Buttons.args = {
}
const Template_Seveen: Story<ButtonsProps> = (args) =>(<CurvedOutlineButtons />);

export const CurvedOutline_Button = Template_Seveen.bind({})
CurvedOutline_Button.args = {
}
const Template_Eight: Story<ButtonsProps> = (args) =>(<FilledSocialButtons />);

export const FilledSocial_Buttons = Template_Eight.bind({})
FilledSocial_Buttons.args = {
}
const Template_Nine: Story<ButtonsProps> = (args) =>(<OutlineSocialButtons />);

export const OutlineSocial_Buttons = Template_Nine.bind({})
OutlineSocial_Buttons.args = {
}
