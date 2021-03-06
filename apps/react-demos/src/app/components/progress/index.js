import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyles';
import progressTheme from '../theme/styles/progressbar';
import { Progressbar, Progressdone } from './css';
import PropTypes from 'prop-types';

const Progress = ({ progressbarstatus, progressbarheading, ...props }) => {

  const [style, setStyle] = useState({});

  useEffect(() => {
    for (let index = 0; index < progressbarstatus; index++) {
      const newStyle = {
        opacity: 1,
        width: `${index}%`,
      };
      setStyle(newStyle);
    }
  }, [progressbarstatus])

  return (
    <ThemeProvider theme={progressTheme}>
      <GlobalStyle />
      <p>Progressbar status {progressbarstatus}% completed</p>
      <Progressbar {...props}>
        <Progressdone style={style} {...props}>
          {progressbarstatus}%
        </Progressdone>
      </Progressbar>
    </ThemeProvider>
  );
};

Progress.propTypes = {
  /** Completion value of the progressbar, from minValue to maxValue. Required */
  progressbarstatus: PropTypes.number,
  /**  text to display progressbar heading */
  progressbarheading: PropTypes.string,
  /** For add padding to main component */
  p: PropTypes.number,
  /** For add top padding to main component */
  pt: PropTypes.number,
  /** For add bottom padding to main component */
  pb: PropTypes.number,
  /** For add left padding to main component */
  pl: PropTypes.number,
  /** For add right padding to main component */
  pr: PropTypes.number,
  /** For add left & right padding to main component */
  px: PropTypes.number,
  /** For add top & bottom padding to main component */
  py: PropTypes.number,
  /** For add margin to main component */
  m: PropTypes.number,
  /** For add top margin to main component */
  mt: PropTypes.number,
  /** For add bottom margin to main component */
  mb: PropTypes.number,
  /** For add left margin to main component */
  ml: PropTypes.number,
  /** For add right margin to main component */
  mr: PropTypes.number,
  /** For add left & right margin to main component */
  mx: PropTypes.number,
  /** For add top & bottom margin to main component */
  my: PropTypes.number,
  /** For giving width to main component */
  width: PropTypes.number,
  /** For giving height to main component */
  height: PropTypes.number
};

export default Progress;
