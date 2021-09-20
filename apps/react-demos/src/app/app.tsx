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
import Checkbox from './components/checkbox'
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
   const [isChecked, setIschecked] = React.useState(false);
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
      <Text fontSize="fontSizeH2" >Check Box</Text>
      <Container>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services"
              value="internet"
              label="Internet"
              backgroundColor="green"
              color="black"
              errorMessage="Error"
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
              value="internet2"
              label="Internet2"
              backgroundColor="green"
              color="black"
              errorMessage="asdas"
              // isFilled
              variant={isChecked ? 'checked' : 'unchecked'}
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
              variant={isChecked ? 'checked' : 'unchecked'}
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        </Container>
        </MainContainer>
        </ThemeProvider>
  )}

export default App;
