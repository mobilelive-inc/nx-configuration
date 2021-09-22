import * as React from 'react';
import { action,} from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Input from './input';
import {InputProps} from './input'
import Text from '../typography';
import Theme from '../theme/defaultTheme';
import GlobalStyle from '../theme/globalStyles';
import '../icomoon_icons.css';
import { Flex, Box } from 'rebass/styled-components';

export default {
  title: 'Input',
  component: Input,
} as Meta ;;

export const TextFields:Story<InputProps> = (args) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10}>
      Basic Input Fields
    </Text>
    <Flex>
      <Box m={10} width="250px">
        <Input
          type="email"
          value=""
          label=""
          placeholder="Default Input"
          id="Default"
          {...args}
        />
      </Box>
      <Box m={10} width="300px">
        <Input
          type="email"
          value=""
          placeholder="Input Curved"
          id="DefaultCurved"
          borderType="curved"
          {...args}
        />
      </Box>
      <Box m={10} width="320px">
        <Input
          type="Email"
          value=""
          placeholder="Input Rounded"
          id="DefaultRounded"
          borderType="rounded"
          {...args}
        />
      </Box>
      <Box m={10} width="330px">
        <Input
          type="Email"
          value=""
          placeholder="Botton Bordered"
          id="bottombordered"
          withBottomBorderOnly
          {...args}
        />
      </Box>
    </Flex>
    <Text variant="H5" ml={10}>
      Input Fields With Labels
    </Text>
    <Flex>
      <Box m={10}>
        <Input
          type="email"
          value=""
          placeholder="Default"
          label="Default"
          id="Default"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="email"
          value=""
          placeholder="Default Curved"
          label="Default Curved"
          id="DefaultCurved"
          borderType="curved"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder="Default Rounded"
          label="Default Rounded"
          id="DefaultRounded"
          borderType="rounded"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder="Botton Bordered"
          label="Bottom Bordered"
          id="BottomBordered"
          withBottomBorderOnly
          {...args}
        />
      </Box>
    </Flex>
    <Text variant="H5" ml={10}>
      Input Fields With Icons
    </Text>
    <Flex>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Search"
          id="search"
          leftIcon="icon-search_24px"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Clear"
          id="clear"
          rightIcon="icon-clear_24px"
          borderType="curved"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder=""
          label="Default Rounded"
          leftIcon="icon-search_24px"
          rightIcon="icon-clear_24px"
          id="DefaultRounded"
          borderType="rounded"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder="Botton Bordered"
          label="Bottom Bordered"
          id="BottomBordered"
          leftIcon="icon-search_24px"
          rightIcon="icon-clear_24px"
          withBottomBorderOnly
          {...args}
        />
      </Box>
    </Flex>
    <Text variant="H5" ml={10}>
      Input Fields With Error States
    </Text>
    <Flex>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Search"
          id="search"
          validationIcon="icon-check_circle_24px"
          isValid={false}
          leftIcon="icon-search_24px"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Clear"
          id="clear"
          validationIcon="icon-check_circle_24px"
          showErrorMessage
          errorMessage="Error Message"
          isValid
          rightIcon="icon-clear_24px"
          borderType="curved"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder=""
          label="Default Rounded"
          error
          errorMessage="Error Message"
          id="DefaultRounded"
          borderType="rounded"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder="Botton Bordered"
          label="Bottom Bordered"
          id="BottomBordered"
          error
          errorMessage="Error Message"
          rightIcon="icon-clear_24px"
          withBottomBorderOnly
          {...args}
        />
      </Box>
    </Flex>
    <Text variant="H5" ml={10}>
      Disabled Input Fields
    </Text>
    <Flex>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Search"
          id="search"
          disabled
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="text"
          value=""
          placeholder=""
          label="Clear"
          id="clear"
          disabled
          borderType="curved"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          placeholder=""
          label="Default Rounded"
          id="DefaultRounded"
          disabled
          borderType="rounded"
          {...args}
        />
      </Box>
      <Box m={10}>
        <Input
          type="Email"
          value=""
          label="Bottom Bordered"
          id="BottomBordered"
          disabled
          withBottomBorderOnly
          {...args}
        />
      </Box>
    </Flex>
  </ThemeProvider>
);
TextFields.args={
  type: 'text',
  value: '',
  error: false,
  errorMessage: '',
  onChange: () => undefined,
  onBlur: () => undefined,
}
