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
import Label from './components/label';
import Input from './components/input';
import Select from './components/select';
import Option from './components/option';
import Toggle from './components/toggle';
import Radio from './components/radio';
import TextArea from './components/textarea'

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
   const [gender, setGender] = useState<string>('male');
   const [value, setValue]= useState('');
   const handleChange =(event:any) =>{
     setValue(event.target.value)
   }
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
      <Text fontSize="fontSizeH2">Radio Button</Text>
        <Container>
        <Flex>
          <Radio
            name="male"
            value="male"
            label="Male"
            backgroundColor="primary"
            color="black"
            borderType="rounded"
            variant={gender === 'male' ? 'checked' : 'unchecked'}
            onChange={() => {
              setGender('male');
            }}
          />
        </Flex>
        <Flex>
          <Radio
            name="female"
            value="female"
            label="female"
            backgroundColor="primary"
            color="blue"
            checkedIconClass="icon-check_circle_24px"
            variant={gender === 'female' ? 'checked' : 'unchecked'}
            onChange={() => {
              setGender('female');
            }}
          />
        </Flex>
        </Container>
      <Text fontSize="fontSizeH2">Text Fields</Text>
        <Container>
        <Flex mt={10}>
          <Label>Please Enter your Name (outside label)</Label>
          <Input
            type="text"
            placeholder="Enter your Name"
            label="name"
            id="Name"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            disabled={false}
            width='100%'
          />
        </Flex>
        <Flex mt={10}>
          <Label mb={10}>Enter your Email</Label>
          <Input
            type="Email"
            value=""
            placeholder="Email"
            label="Email"
            id="Email"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            borderType="curved"
            disabled={false}
            width='100%'
          />
        </Flex>
        <Flex mt={10} style={{display:'block'}}>
        <Label  mb={20}>Please Enter your Varified Email</Label>
          <Input
            type="search"
            value="sdfsdf"
            placeholder="Enter your Email "
            label="Email"
            id="Email"
            showErrorMessage
            isClearButtonVisible
            borderType="rounded"
            errorMessage="required field"
            error
            rows="20"
            cols="14"
            isValid={true}
            width='100%'
            withBottomBorderOnly
          />
          </Flex>
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
            clearButtonClasses="icon-delete_24px"
            borderType="curved"
            withBottomBorderOnly
            disabled={false}
            onChange={handleChange}
            width='100%'
          />

        </Flex>
          <Flex mt={10}>
            <Label>Enter your comment here </Label>
          <TextArea
            type="text"
            value={''}
            ml={10}
            placeholder="Text Area"
            label="Enter your comment"
            onChange={e => {
              setGender(e.target.value);
            }}
            borderType="rounded"
            errorMessage="required field"
            error
            id="search"
            isValid={true} 
            rows="100"
            cols="100"
            iconPosition="inside"
            validationIcon="icon-check_circle_24px"
            bottomValidationIcon="icon-check_circle_24px"
            />
        </Flex>
        </Container>
        </MainContainer>
        </ThemeProvider>
  )}

export default App;
