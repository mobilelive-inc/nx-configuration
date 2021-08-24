import { render } from '@testing-library/react';
import AdvancedStepper from './advanced-stepper';

describe('AdvancedStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< AdvancedStepper />);
    expect(baseElement).toBeTruthy();
  });
});
