import React, { useState, useEffect, FC } from "react";
import { Progress, Progressdone, ContainerDiv } from "./css";
import "./progressbar.module.scss";

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
    <ContainerDiv>
      <p>Progressbar status {props.progressbarstatus}% completed</p>
      <Progress {...props}>
        <Progressdone style={style} {...props}>
          {props.progressbarstatus}%
        </Progressdone>
      </Progress>
    </ContainerDiv>
  );
}

export default Progressbar;
