import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme  from "../theme/defaultTheme";
import Radio from "../radiobutton/radiobutton";
import PropTypes from 'prop-types';
import GlobalStyle from "../theme/globalStyles";
import Text from "../typography";
import { Story, Meta } from '@storybook/react';
import {
  Section,
  Wrapper,
  ButtonWrapper,
  InlineWrapper,
  MainWrapper,
} from "./css";

export default {
  title: 'Radio Button',
  component: Radio,
  argTypes : {
    /**
     * The label.
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /**
     * The ID. Need to be defined for labels.
     */
    id: PropTypes.string.isRequired,
    /**
     * Associate this checkbox with a group. Set as the HTML name attribute.
     */
    name: PropTypes.string.isRequired,
    /**
     * The variant state
     */
    variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
    /**
     * A callback function to be invoked when the checkbox is checked or unchecked.
     */
    onChange: PropTypes.func,
    /**
     * color controld the color for border and fill color.
     */
    color: PropTypes.string,
    /** It is a validation's error message */
    error: PropTypes.bool,
    borderType: PropTypes.oneOf(['curved', 'rounded']),
    className: PropTypes.string
  }
};
const Basicbtn:Story = ({ value,btntype, args}) => {
  const [fruit, setfruit] = React.useState('fruit');
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ButtonWrapper
        role="radiogroup"
        aria-labelledby="example-radio-group-label-1"
      >
        <Text mb={10} mr={32}>
          pic your favorite fruit : {value}
        </Text>
        <Radio
          tabIndex="0"
          name="apple"
          value="apple"
          label="Apple"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "apple" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("apple");
          }}
          {...args}
        />
        <Radio
          tabIndex="0"
          name="mango"
          value="mango"
          label="Mango"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "mango" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("mango");
          }}
          {...args}
        />
        <Radio
          tabIndex="0"
          name="orange"
          value="orange"
          label="Orange"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "orange" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("orange");
          }}
          {...args}
        />
        <Text color="primary" mb={32}>
          your favriote : {fruit}
        </Text>
      </ButtonWrapper>
    </ThemeProvider>
  );
};

interface Inlineprops{
    value?:string;
    btntype?:string
}

const InlineButton:React.FC<Inlineprops> = ({ value,btntype }) => {
  const [fruit, setfruit] = useState('fruit');
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text mb={10}>pic your favorite fruit {value}</Text>
      <InlineWrapper>
        <Radio
          name="apple"
          value="apple"
          label="Apple"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "apple" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("apple");
          }}
        />
        <Radio
          name="mango"
          value="mango"
          label="Mango"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "mango" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("mango");
          }}
        />
        <Radio
          name="orange"
          value="orange"
          label="Orange"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "orange" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("orange");
          }}
        />
      </InlineWrapper>
      <Text color="primary">Fruit : {fruit}</Text>
    </ThemeProvider>
  );
};

export const RadioRounded = ({args}) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={32}>
          Radio Button
        </Text>
        <MainWrapper>
          <Text variant="H3" mb={10}>
            Basic
          </Text>
          <Wrapper>
            <Basicbtn value="value" btntype="rounded" {...args}/>
            <Basicbtn value="ng Modal"  btntype="rounded"{...args}/>
            <Basicbtn value="Reactive Froms"  btntype="rounded" {...args}/>
          </Wrapper>
          <Text variant="H3" my={10}>
            Inline
          </Text>
          <InlineButton btntype="rounded" {...args}/>
        </MainWrapper>
      </Section>
    </ThemeProvider>
  );
};

RadioRounded.args = {
  variant: 'unchecked',
  onChange: {action:'fruit'},
  error: false
};

export const RadioCurved = (args) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={32}>
          Radio Button
        </Text>
        <MainWrapper>
          <Text variant="H3" mb={10}>
            Basic
          </Text>
          <Wrapper>
            <Basicbtn value="value" btntype="curved" {...args}/>
            <Basicbtn value="ng Modal"  btntype="curved" {...args}/>
            <Basicbtn value="Reactive Froms"  btntype="curved" {...args}/>
          </Wrapper>
          <Text variant="H3" my={10}>
            Inline
          </Text>
          <InlineButton btntype="curved"/>
        </MainWrapper>
      </Section>
    </ThemeProvider>
  );
};
RadioCurved.args = {
  variant: 'unchecked',
  onChange: {action:'fruit'},
  error: false
};