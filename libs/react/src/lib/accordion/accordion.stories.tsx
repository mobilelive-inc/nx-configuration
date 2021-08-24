import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionCollapse
} from './accordion';
import Text from '../typography';
import accordionTheme from '../theme/styles/accordion';
import GlobalStyle from '../theme/globalStyles';
import '../icomoon_icons.css';

export default {
  title: 'Accordion',
  component: Accordion
};

export const SwitchableAccordion = () => (
  <ThemeProvider theme={accordionTheme}>
    <GlobalStyle />
    <Text variant="H5" mb={5} ml={2}>
      Switchable Accordion
    </Text>

    <Accordion onExpand={() => {}} onCollapse={() => {}}>
      <AccordionHeader title="Expanable" />
      <AccordionCollapse>
        <div>This is story</div>
      </AccordionCollapse>
    </Accordion>
  </ThemeProvider>
);

export const OpenedAccordion = () => (
  <ThemeProvider theme={accordionTheme}>
    <GlobalStyle />
    <Text variant="H5" mb={5} ml={2}>
      Opened Accordion
    </Text>

    <Accordion onExpand={() => {}} onCollapse={() => {}} isVisible={true}>
      <AccordionHeader title="Expanded" />
      <AccordionCollapse>
        <div>This is story</div>
      </AccordionCollapse>
    </Accordion>
  </ThemeProvider>
);

export const BasicAccordion = () => (
  <ThemeProvider theme={accordionTheme}>
    <GlobalStyle />
    <Text variant="H5" mb={5} ml={2}>
      Opened Accordion
    </Text>

    <AccordionContainer hasMultiple={false}>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
    </AccordionContainer>
  </ThemeProvider>
);

export const MultipleAccordion = () => (
  <ThemeProvider theme={accordionTheme}>
    <GlobalStyle />
    <Text variant="H5" mb={5} ml={2}>
      Opened Accordion
    </Text>

    <AccordionContainer hasMultiple={true}>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
      <Accordion onExpand={() => {}} onCollapse={() => {}}>
        <AccordionHeader title={'Heading'}></AccordionHeader>
        <AccordionCollapse>
          <div>This is the for testing purpose</div>
        </AccordionCollapse>
      </Accordion>
    </AccordionContainer>
  </ThemeProvider>
);