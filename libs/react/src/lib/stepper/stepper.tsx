import React, { useState, useEffect } from 'react';
import { ProgressWrapper, ProgressStepper } from './css';
import Span from '../icon/icon';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import stepperTheme from '../theme/styles/stepper';
import GlobalStyle from '../theme/globalStyles';
import PropTypes from 'prop-types';

interface StepperProps{
    width?:string
    variant:string
    total:number
    value:number
    isCountVisible?:boolean
    textAlign?:string
    children?: string
    "aria-live"?: "assertive"
    "aria-label"?: string
     mt?: number;
}
const Stepper:React.FC<StepperProps> = props => {
  const { total, value, isCountVisible } = props;
  const [progressWidth, setProgressWidth] = useState<number>(0);

  useEffect(() => {
    setProgressWidth((value / total) * 100);
  }, [total, value]);

  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <Box>
        <ProgressWrapper {...props}>
          <ProgressStepper {...props} width={`${progressWidth}%`} />
        </ProgressWrapper>
        {isCountVisible && (
          <Span
            textAlign="center"
            aria-live="assertive"
            aria-label={`Step ${value} of ${total}`}
            mt={1}>{`${value} of ${total}`}</Span>
        )}
      </Box>
    </ThemeProvider>
  );
};

Stepper.defaultProps = {
  total: 10,
  value: 3,
  variant: 'primary',
  isCountVisible: true
};

Stepper.propTypes = {
  /** Total Number of steps */
  total: PropTypes.number.isRequired,
  /** Step no where user stands */
  value: PropTypes.number.isRequired,
  /** To manage theme*/
  variant: PropTypes.string,
  /** This is to show/hide the below count, by-default it's value is true*/
  isCountVisible: PropTypes.bool
};

export default Stepper;