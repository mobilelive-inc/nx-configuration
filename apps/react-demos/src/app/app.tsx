import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
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
} from './components/buttoncontiner';
import { Text } from './components/typography'
import Container from './components/container';
import { MainContainer } from './components/container';
import theme, { colors } from './components/theme/defaultTheme';
import AdvancedStepper from './components/advanced-stepper';
import { Flex, Box } from 'rebass/styled-components';
import Button from './components/button';
import { OtherSpecs, Typography } from './components/otherspecs';
import SkipLink from './components/skiplink';
import Select from './components/select'
import Option from './components/option'
import Toggle from './components/toggle'
export function App() {
  interface OptionProps{
    id?:number
    value?:string
    target?: EventTarget;
  }
  const options : OptionProps[]= [
    {
      id: 0,
      value : 'Javascript'
    },
    {
      id: 2,
      value: 'Java'
    },
    {
      id: 3,
      value: 'C++'
    }
  ];
  
   const [count, setCount] = useState<number>(1);
   const [selected, setSelected] = useState('');
   const [isOn, setIsOn] = useState<boolean>(false);
  return (
      <ThemeProvider theme={theme}>
      <Box
        p={25}
        bg={colors.bgLight}
        justifyContent="center"
        alignItems="center">
        <MainContainer>
          <Text  bold fontSize="fontSizeH1">
            React Components Demo
          </Text>
          <Text fontSize="fontSizeBase">
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </Text>
        </MainContainer>
      </Box>
       <MainContainer>
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
        <Text fontSize="fontSizeH2">Typography</Text>
        <Container>
          <Typography />
        </Container>
        <Text fontSize="fontSizeH2">OtherSpecs</Text>
        <Container>
          <OtherSpecs />
          </Container>
        <Text fontSize="fontSizeH2">Skip Navigation</Text>
        <Container>
          <div style={{ height: '100px', background: colors.primary }}></div>
          <SkipLink
            href="#"
            focusableID="newId"
            title="Skip"
            top={150}
            border="none"
            backgroundColor="blue"
            color="white"
          />
        </Container>
        <Text fontSize="fontSizeH2">Select</Text>
      <Container>
          <Select
            name="greetings"
            width="50%"
            height="40px"
            rightIcon="icon-delete_24px"
            leftIcon="icon-delete_24px"
            disabled
            onLeftIconClick={() => alert('on left')}
            backgroundColor="gray"
            placeholder="select on option"
            borderType="rounded"
            errorMessage="this is error"
            validationIcon="icon-check_circle_24px"
            withBorderBottomOnly
            chevron="icon-keyboard_arrow_down_24px"
            value={selected}
            onChange={(e)=> setSelected(e.target.value)}
            color="black">
            {options.map(option => (
              <option value={option.id} key={option.id}>{option.value}</option>
            ))}
          </Select>
          <Flex mt={20}>
          <Select
            name="greetings"
            width="50%"
            height="40px"
            borderRadius="50px"
            placeholder="select on option"
            borderType="rounded"
            errorMessage=""
            validationIcon="icon-check_circle_24px"
            withBorderBottomOnly
            chevron="icon-keyboard_arrow_down_24px"
            value={selected}>
            <Option value="1">Hey</Option>
            <Option value="2">There</Option>
            <Option value="3">Hello</Option>
          </Select>
        </Flex>
        <Flex mt={20}>
          <Select
            name="greetings"
            width="50%"
            height="40px"
            errorMessage="this is error"
            borderRadius="10px">
            <Option value="1">Hey</Option>
            <Option value="2">There</Option>
            <Option value="3">Hello</Option>
          </Select>
        </Flex>
          </Container>
          <Text fontSize="fontSizeH2">Toggle</Text>
       <Container>
        <Toggle
          shortDescription="Test toggle"
          id="bt1"
          size="lg"
          isToggled={isOn}
          error
          label="On"
          onChange={() => {
            setIsOn(!isOn);
          }}
          styles={{
          }}
        />
        <Toggle
          shortDescription="Test toggle"
          identity="bt1"
          styles={{
            toggledOnBgColor: 'green',
            toggledOffBgColor: 'white',
            switchOnColor: 'orange',
            switchOffColor: 'black',
            toggledOffBorder: '1px solid black'
          }}
          size="sm"
          isToggled={isOn}
          onChange={() => {
            setIsOn(!isOn);
          }}
        />
        <Toggle
          shortDescription="Test toggle"
          identity="bt1"
          styles={{
            toggledOnBgColor: 'white',
            toggledOffBgColor: 'white',
            switchOnColor: 'black',
            switchOffColor: 'black',
            toggledOffBorder: '1px solid black',
            toggledOnBorder: '1px solid black'
          }}
          label="On"
          size="sm"
          isToggled={isOn}
          onChange={() => {
            setIsOn(!isOn);
          }}
        />
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
        </MainContainer>
        </ThemeProvider>
  )}

export default App;
