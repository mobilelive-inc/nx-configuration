import { render } from '@testing-library/react';

import ReactComponentsLib from './react-components-lib';

describe('ReactComponentsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponentsLib />);
    expect(baseElement).toBeTruthy();
  });
});
