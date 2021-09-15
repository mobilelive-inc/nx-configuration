import * as React from 'react';
import { StyledLink } from './css';

interface SkipLinkProps{
  title:string
  top:number
  href: string;
  focusableID: string;
  border: string;
  backgroundColor: string;
  color: string;
}
const SkipLink:React.FC<SkipLinkProps> = ({ focusableID, title, ...props }) => {
  // Need Id where we want to move the focus
  const focusToNext = () => {
    const element = document.getElementById(focusableID);
    if (element) {
      element.focus();
    } else {
      console.log(`The Id: '${focusableID}' is not available`);
    }
  };

  return (
    <StyledLink
      {...props}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          focusToNext();
        }
      }}
      onClick={focusToNext}>
      {title || ``}
    </StyledLink>
  );
};

export default SkipLink;