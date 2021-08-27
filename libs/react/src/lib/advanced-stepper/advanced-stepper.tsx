import React, { useState, useEffect } from 'react';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import advancedStepper from './../theme/styles/advancedStepper';
import GlobalStyle from './../theme/globalStyles';
import {
  VistedStep,
  UnVisitedStep,
  ProgressBar,
  StepperContainer,
  StepItemContainer,
  AnnouncementText
} from './css';
import { Text } from './../typography';
import Icon from './../icon/icon';


interface advstepper {
  currentStep:number
  steps:any
  visitedCount:number
  status:number | string
}
interface advstepperprops {
  total:number
  value:number
  hideName?:boolean
  dataList?:any
  variant?:string
}
const AdvancedStepper:React.FC<advstepperprops> = ({total,value,hideName,dataList,variant, ...props}) => {
  const [currentStep, setCurrentStep] = useState<advstepper['currentStep']>(value);
  const [steps, setSteps] = useState<advstepper['steps']>([]);
  const [visitedCount, setVisitedCount] = useState<advstepper['visitedCount']>(1);
  const [status, setStatus] = useState<advstepper['status']>('');

  useEffect(() => {
    // setProgressWidth((value / total) * 100);
    if (value >= visitedCount) {
      setVisitedCount(value);
    }
    setCurrentStep(value);
  }, [total, value]);

  useEffect(() => {
    setStatus('You are now on step ' + value);
  }, [value]);

  useEffect(() => {
    initializedSteps();
  }, []);

  useEffect(() => {
    initializedSteps();
  }, [currentStep]);

  useEffect(() => {
    initializedSteps();
  }, [visitedCount]);

  const initializedSteps = () => {
    const array = [];
    for (let i = 1; i <= total; i++) {
      array.push({
        number: i,
        isVisited: i <= visitedCount ? true : false,
        isCurrentStep: i === currentStep ? true : false,
        name: dataList[i - 1]
      });
    }
    setSteps(array);
  };

  return (
    <ThemeProvider theme={advancedStepper}>
      <GlobalStyle />
      <Box>
        <AnnouncementText aria-live="assertive" />
        <StepperContainer>
          {steps.map((item, index) => {
            let alignValue = 'start';
            switch (index) {
              case 0:
                  alignValue = 'start';
                break;
              case steps.length - 1:
                  alignValue = 'flex-end';
                break;
              default:
                alignValue = 'center';
            }
            return (
              <Box key={index}>
                {item.isCurrentStep === true ? (
                  <StepItemContainer>
                    <VistedStep
                      {...props}
                      aria-label={
                        item.name
                          ? 'Step ' +
                            item.number +
                            ' is Current Step' +
                            item.name
                          : 'Step ' + item.number + ' is Current Step'
                      }>
                      <Text>{item.number}</Text>
                    </VistedStep>
                    {hideName && (
                      <Text aria-label={item.name} bold>
                        {item.name}
                      </Text>
                    )}
                  </StepItemContainer>
                ) : (
                  <Box>
                    {item.isVisited === true ? (
                      <StepItemContainer>
                        <VistedStep
                          {...props}
                          aria-label={
                            item.name
                              ? 'Step ' +
                                item.number +
                                ' is Visited Step' +
                                item.name
                              : 'Step ' + item.number + ' is Visited Step'
                          }
                          onClick={() => {
                            setCurrentStep(item.number);
                          }}>
                          <Icon className="font--size--lg icon-check ng-star-inserted" />
                        </VistedStep>
                        {hideName && (
                          <Text aria-label={item.name}>{item.name}</Text>
                        )}
                      </StepItemContainer>
                    ) : (
                      <StepItemContainer>
                        <UnVisitedStep
                          {...props}
                          aria-label={
                            item.name
                              ? 'Step ' +
                                item.number +
                                ' is un visited step' +
                                item.name
                              : 'Step ' + item.number + ' is un visited step'
                          }>
                          <Text>{item.number}</Text>
                        </UnVisitedStep>
                        {hideName && (
                          <Text aria-label={item.name}>{item.name}</Text>
                        )}
                      </StepItemContainer>
                    )}
                  </Box>
                )}
              </Box>
            );
          })}
          <ProgressBar {...props} />
        </StepperContainer>
      </Box>
    </ThemeProvider>
  );
};

AdvancedStepper.defaultProps = {
  total: 3,
  value: 1,
  hideName: true,
  dataList: []
};

AdvancedStepper.propTypes = {
  /** number of total steps */
  total: PropTypes.number,
  /** current step in stepper */
  value: PropTypes.number,
  /** want to show/hide name with every step */
  hideName: PropTypes.bool,
  /** if names are visible than provide array of string to set these */
  dataList: PropTypes.array
};

export default AdvancedStepper;