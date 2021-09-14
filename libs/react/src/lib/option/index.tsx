import * as React from 'react';

interface OptionProps{
    value?:Element[any]
    children?:string,
    id?:number
}

const Option:React.FC<OptionProps> = ({
  value, children,id
}) => {
  return (
      <option value={value} key={id}>
        {children}
      </option>
  )
}

export default Option;