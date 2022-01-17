import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Button variant="primary" width="15%" m={10}>Test</Button>);
    expect(baseElement).toBeTruthy();
  });
});
