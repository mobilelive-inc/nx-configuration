import React, { useState, useEffect,} from "react";
import { Progress, Progressdone } from "./css";
import { ThemeProvider } from "styled-components";
import progressTheme from '../../theme/styles/progressbar';
import GlobalStyle from "../../theme/globalStyles";
import Container from "../container";

/* eslint-disable-next-line */
export interface ProgressbarProps {
  progressbarstatus: number;
  progressbarheading: string;
}

export function Progressbar(props: ProgressbarProps) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    for (let index = 0; index < props.progressbarstatus; index++) {
      const newStyle = {
        opacity: 1,
        width: `${index}%`,
      };
      setStyle(newStyle);
    }
  }, [props.progressbarstatus]);
  return (
    <ThemeProvider theme={progressTheme}>
      <GlobalStyle />
    <Container>
      <p>Progressbar status {props.progressbarstatus}% completed</p>
      <Progress {...props}>
        <Progressdone style={style} {...props}>
          {props.progressbarstatus}%
        </Progressdone>
      </Progress>
    </Container>
    </ThemeProvider>
  );
}

export default Progressbar;
