import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import  Select from "./select";
import Option from '../option';
import Text from '../typography';
import  Theme, { fontSizes, fontWeights, lineHeights } from '../theme/defaultTheme'
import GlobalStyle from '../theme/globalStyles';
import PropTypes from 'prop-types';
import '../icomoon_icons.css';
import {
  Flex, Box
} from 'rebass/styled-components'

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story = (args) => {
const [select, setSelected] = React.useState('')
return(
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10}>Select</Text>
    <Flex>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          borderType="curved"
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          borderType="rounded"
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
    <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
    <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
    <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
      <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid={false}
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black"
          {...args}>
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
  </ThemeProvider>
)};

export const Primary = Template.bind({})
Primary.args = {
    disabled: false,
    fontSize: [fontSizes.fontSizeBase, fontSizes.fontSizeSM],
    lineHeight: [lineHeights.lineheight_3x_small],
    m: [0],
    fontWeight: [fontWeights.fontweight_medium],
    width: [1],
    textAlign: ['center'],
    borderRadius: [0],
    onClick: () => undefined,
    withIcon: false 
}
  
  Select.propTypes = {
    /** Need to be instances of Option component */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    /** Option to disable select */
    disabled: PropTypes.bool,
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
  
    