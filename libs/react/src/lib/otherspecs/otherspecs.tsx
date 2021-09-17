import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../typography';
import theme from '../theme/defaultTheme';

export const Typography = () => (
  <ThemeProvider theme={theme}>
    <Text variant="H1">
      {' '}
      <span>Heading 1</span>{' '}
    </Text>
    <Text color="primary" variant="H2">
      {' '}
      Heading 2{' '}
    </Text>
    <Text color="secondary" variant="H3">
      Heading 3
    </Text>
    <Text color="success" variant="H4">
      Heading 4
    </Text>
    <Text  color="danger" variant="H5">
      Heading 5
    </Text>
    <Text color="blue" variant="H6">
      Heading 5
    </Text>
    <Text color="green">
      This is a paragraph
    </Text>
  </ThemeProvider>
);

export const OtherSpecs = () => (
  <ThemeProvider theme={theme}>
    <Text mark>
      {' '}
      You can use the mark tag to highlight the text.
    </Text>
    <Text  deleted>
      This line of text is meant to be treated as deleted text.
    </Text>
    <Text  underline>
      This line of text will render as underlined
    </Text>
    <Text >
      This line of text is meant to be treated as fine print.
    </Text>
    <Text  bold>
      This line rendered as bold text.
    </Text>
    <Text  italic>
      This line rendered as italicized text.
    </Text>
  </ThemeProvider>
);