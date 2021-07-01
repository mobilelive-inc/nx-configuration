import React, { useState, useEffect } from 'react';
import { Progress, Progressdone,ContainerDiv } from './css';
import './progressbar.module.scss';
  
/* eslint-disable-next-line */
export interface ProgressbarProps {
}

export function Progressbar({ progressbarstatus, progressbarheading, ...props }) {
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
    <ContainerDiv>
      <p>Progressbar status {progressbarstatus}% completed</p>
      <Progress {...props}>
        <Progressdone style={style} {...props}>
          {progressbarstatus}%
        </Progressdone>
      </Progress>
    </ContainerDiv>
  );
};


export default Progressbar;
