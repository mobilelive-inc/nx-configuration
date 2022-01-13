import React from 'react';
import styled from 'styled-components';
import {
  compose,
  background,
  border,
  flexbox,
  position,
  shadow,
} from 'styled-system';
import {
  Flex as BaseFlex, Image
 } from 'rebass/styled-components';
import galaxy from '../../assets/galaxy.jpg';
/**
 * Rebass Flex with additional support
 */
export const Flex = styled(BaseFlex)(
  compose(
    border,
    background,
    flexbox,
    position,
    shadow,
  ),
);

const GetStarted = () => {
  return (
    <div
      style={{
        fontFamily:'"Noto Sans", sans-serif'
      }}>
      <Flex
        alignItems="center"
        justifyContent="center">
        <Image
          src={galaxy}
          sx={{
            width: [ '100%', '50%' ],
            borderRadius: 8,
          }}/>
      </Flex>
      <Flex
        pl={["0px", "25%"]}>
        <h3>Friday</h3>
      </Flex>
      <Flex
        px={["0px", "25%"]}>
        <p>{`Friday is an opinionated assemblage of open-source tools
          and libraries that allow you to accelerate the development of your
          web application.The choice of tools, their composition, and a set of foundational
          components guides you on how to build a constraint-based system.`}</p>
      </Flex>
      <Flex
        pl={["0px", "25%"]}>
        <h4>What does it include?</h4>
      </Flex>
      <Flex
        px={["0px", "25%"]}>
        <p>
          {
            `Friday is built following the philosophy of composition.
            It provides a ranged of UI components that can be composed together
            to build a web application.
            `
          }
        </p>
      </Flex>
      <Flex
        px={["0px", "25%"]}>
        <ul>
          <li style={{padding:'5px'}}>
            The design kit is built and maintained in Figma. It includes a set of foundational components and a reference architecture.
          </li>
          <li style={{padding:'5px'}}>
            {
              `The component library, mirrors the Figma components and is built using
              Javascript, React, Styled System and Styled Components.`
            }
          </li>
          <li style={{padding:'5px'}}>
            Storybook acts as both the developer sandbox and the documentation platform.
          </li>
        </ul>
      </Flex>
      <Flex
        pl={["0px", "25%"]}>
        <h4>Definitions</h4>
      </Flex>
      <Flex
        px={["0px", "25%"]}>
        <ul>
          <li>
            <b>Design Kit —</b>
            <p> a library of shared styles, symbols or components that can be used by product teams to design or prototype new experiences.</p>
          </li>
          <li>
            <b>Design Tokens —</b>
            <p> the overall visual design of a digital product. This foundation defines characteristics such as typography, colors, icons, spacing and information architecture.</p>
          </li>
          <li>
            <b>Component Library —</b>
            <p> a set of JavaScript components that are version controlled and are composed to build one or more products.</p>
          </li>
          <li>
            <b>Documentation —</b>
            <p>
              a set of guidelines on how to consume the Design System, design and dev considerations and detailed documentation for each component. The documentation site often includes a live playground that is aimed at the consumers to try out components in the browser.
            </p>
          </li>
        </ul>
      </Flex>
      <Flex
        pl={["0px", "25%"]}>
        <h4>Resouces</h4>
      </Flex>
      <Flex
        px={["0px", "25%"]}>
        <ul>
          <li style={{padding:'5px'}}>
            <a href="/" style={{textDecoration:"none"}}>Github Repository</a>
          </li>
          <li style={{padding:'5px'}}>
            <a href="/" style={{textDecoration:"none"}}>Figma designs</a>
          </li>
          <li style={{padding:'5px'}}>
            <a href="/" style={{textDecoration:"none"}}>NPM package</a>
          </li>
        </ul>
      </Flex>
    </div>
  )
}

export default GetStarted;
