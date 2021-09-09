import { render } from '@testing-library/react';

import Toggle from './toggle';

describe('Toggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Toggle />);
    expect(baseElement).toBeTruthy();
  });
});
