import { render } from '@testing-library/react';
import {OtherSpecs} from './otherspecs';

describe('Otherspecs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< OtherSpecs />);
    expect(baseElement).toBeTruthy();
  });
});
