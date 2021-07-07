import React, {useState} from 'react';
import styles from './app.module.scss';
import Progress from './components/progress';
import { ContainerDiv, Div } from './components/progress/css';
import Container from './components/container';
import { Flex, Box } from 'rebass/styled-components';
import Checkbox from './components/checkbox';
import { ThemeProvider } from 'styled-components';
import theme from '../app/components/theme/defaultTheme';
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
} from './components/ButtonContainer';
import {
  Accordion,
  AccordionCollapse,
  AccordionHeader,
  AccordionContainer
} from './components/accordion';
import AdvancedStepper from './components/advanced-stepper';
import Button from './components/Button';
import {Text} from './components/typography';
import Select  from './components/select';
import {Cards} from './components/cards';
import Input from './components/Input';
import Label from './components/label';
import TextArea from './components/textArea';

/* eslint-disable-next-line */
export interface AppProps {
  // Options:array;
     name:string;
     width:string;
     height:string;
     rightIcon:string;
     leftIcon:string;
}


export function App(props: AppProps) {
  let Options = [
    // {
    //   id: 0,
    //   value: 'Javascript'
    // },
    // {
    //   id: 2,
    //   value: 'Java'
    // },
    // {
    //   id: 3,
    //   value: 'C++'
    // }
  ];
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(1);
  const [isChecked, setIschecked] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Div>
          <h1>
            React Components Demo
          </h1>
          <p>
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </p>

        <Text fontSize="fontSizeH2">Primary Buttons</Text>
        <Container>
          <PrimaryButton />
        </Container>

        <Text fontSize="fontSizeH2">Outline Buttons</Text>
        <Container>
          <OutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Clear Buttons</Text>
        <Container>
          <ClearButton />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Buttons</Text>
        <Container>
          <RoundedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Outline Buttons</Text>
        <Container>
          <RoundedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Buttons</Text>
        <Container>
          <CurvedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Outline Buttons</Text>
        <Container>
          <CurvedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Filled Social Buttons</Text>
        <Container>
          <FilledSocialButtons />
        </Container>

        <Text fontSize="fontSizeH2">Outline Social Buttons</Text>
        <Container>
          <OutlineSocialButtons />
        </Container>
        <Text fontSize="fontSizeH2">Select</Text>
      <Container>
          <Select
            name="greetings"
            width="15%"
            height="40px"
            rightIcon="icon-delete_24px"
            leftIcon="icon-delete_24px"
            disabled
            onLeftIconClick={() => alert('on left')}
            // backgroundColor="gray"
            placeholder="select on option"
            // borderType="rounded"

            errorMessage="this is error"
            validationIcon="icon-check_circle_24px"
            // withBorderBottomOnly
            chevron="icon-keyboard_arrow_down_24px"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            color="black">
            {Options.map(option => (
              <Option value={option.id}>{option.value}</Option>
            ))}
          </Select>
          <Flex mt={20}>
          <Select
            name="greetings"
            width="50%"
            height="40px"
            borderRadius="50px">
            <option value="1">Hey</option>
            <option value="2">There</option>
            <option value="3">Hello</option>
          </Select>
        </Flex>
        <Flex mt={20}>
          <Select
            name="greetings"
            width="50%"
            height="40px"
            errorMessage="this is error"
            borderRadius="10px">
            <option value="1">Hey</option>
            <option value="2">There</option>
            <option value="3">Hello</option>
          </Select>
        </Flex>
      </Container>
      <Text fontSize="fontSizeH2">Accordion</Text>
        <Container>
          <AccordionContainer hasMultiple={false}>
            <Accordion
              onExpand={() => console.log('Opened')}
              onCollapse={() => console.log('Closed')}>
              <AccordionHeader title={'Heading'}></AccordionHeader>
              <AccordionCollapse>
                <div>This is the for testing purpose</div>
              </AccordionCollapse>
            </Accordion>
            <Accordion
              onExpand={() => console.log('Opened')}
              onCollapse={() => console.log('Closed')}>
              <AccordionHeader title={'Heading'}></AccordionHeader>
              <AccordionCollapse>
                <div>This is the for testing purpose</div>
              </AccordionCollapse>
            </Accordion>
            <Accordion
              onExpand={() => console.log('Opened')}
              onCollapse={() => console.log('Closed')}>
              <AccordionHeader title={'Heading'}></AccordionHeader>
              <AccordionCollapse>
                <div>This is the for testing purpose</div>
              </AccordionCollapse>
            </Accordion>
          </AccordionContainer>
        </Container>

        <h2>Progressbar</h2>
        <ContainerDiv>
          <Progress progressbarheading='Progress' progressbarstatus={100} />
        </ContainerDiv>
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <AdvancedStepper
            variant="primary"
            value={count}
            total={3}
            hideName={true}
            dataList={['Option 1', 'Option 2', 'Option 3']}
          />

          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              Previous
            </Button>
            <Button
              disabled={count === 3}
              variant={count === 3 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 3) {
                  setCount(count + 1);
                }
              }}>
              Next
            </Button>
          </Flex>
        </Container>
        <Text fontSize="fontSizeH2">Cards</Text>
        <Container>
        <Cards />
        </Container>
        <Text fontSize="fontSizeH2">Check boxes</Text>
          <Container>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services"
              value="internet"
              label="Internet"
              backgroundColor="green"
              color="black"
              errorMessage="asdas"
              isFilled
              variant={isChecked ? 'checked' : 'unchecked'}
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services"
              value="internet"
              label="Internet"
              backgroundColor="green"
              color="black"
              errorMessage="asdas"
              isFilled
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="white"
              errorMessage=""
              isFilled
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="white"
              errorMessage=""
              isFilled
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="black"
              errorMessage=""
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="black"
              errorMessage=""
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="primary"
              color="primary"
              errorMessage=""
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="primary"
              color="primary"
              errorMessage=""
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="curved"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="curved"
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="rounded"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="dong"
              backgroundColor="primary"
              color="primary"
              errorMessage="dasdasd"
              checkedIconClass="icon-check_circle_24px"
              borderType="rounded"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        </Container>
        <Text fontSize="fontSizeH2">Text Fields</Text>
        <Container>
        <Flex>
          <Label position="absolute" mb={20}>This is outside label</Label>
          <Input
            type="Password"
            value=""
            placeholder="Password"
            label=""
            id="Password"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            mt={16}
            // leftIcon="icon-delete_24px"
            // leftIconClick={() => alert("left icon clicked")}
            // rightIcon="icon-delete_24px"
            // rightIconClick={() => alert("right icon clicked")}
            clearButtonClasses="icon-delete_24px"
            onClear={() => {}}
            // borderType="curved"
            // borderRadius="10px"
            withBottomBorderOnly
            disabled={false}
          />
        </Flex>
        <Flex mt={10}>
          <Label>This is outside label</Label>
          <Input
            type="Email"
            value=""
            placeholder="Email"
            label="Email"
            id="Email"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            // leftIcon="icon-delete_24px"
            // leftIconClick={() => alert("left icon clicked")}
            // rightIcon="icon-delete_24px"
            // rightIconClick={() => alert("right icon clicked")}
            // borderType="curved"
            // borderRadius="10px"
            // withBottomBorderOnly
            disabled={false}
          />
        </Flex>
        <Flex mt={10}>
          <Input
            type="Email"
            value=""
            placeholder="Email"
            label="Email"
            id="Email"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            // leftIcon="icon-delete_24px"
            // leftIconClick={() => alert("left icon clicked")}
            // rightIcon="icon-delete_24px"
            // rightIconClick={() => alert("right icon clicked")}
            borderType="curved"
            // borderRadius="10px"
            // withBottomBorderOnly
            disabled={false}
          />
        </Flex>
        <Flex mt={10} style={{display:'block'}}>
          <Input
            type="search"
            value="sdfsdf"
            placeholder="Emasdfsdfsdfil"
            label="Email"
            id="Email"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            // leftIcon="icon-delete_24px"
            // leftIconClick={() => alert("left icon clicked")}
            // rightIcon="icon-delete_24px"
            // rightIconClick={() => alert("right icon clicked")}
            borderType="rounded"
            // disabled
            errorMessage="required field"
            error
            id="search"
            rows="20"
            cols="14"
            iconPosition="inside"
            validationIcon="icon-check_circle_24px"
            bottomValidationIcon="icon-check_circle_24px"
            isValid={true}
          />
          <TextArea
            type="text"
            // width="auto"
            // height=""
            value={''}
            ml={10}
            placeholder="Text Area"
            label=""
            onChange={e => {
              setGender(e.target.value);
            }}
            borderType="rounded"
            // disabled
            errorMessage="required field"
            error
            id="search"
            rows="20"
            cols="14"
            iconPosition="inside"
            validationIcon="icon-check_circle_24px"
            bottomValidationIcon="icon-check_circle_24px"
            isValid={true}
          />
        </Flex>
        </Container>
     </Div>
     </ThemeProvider>
  );
}

export default App;
