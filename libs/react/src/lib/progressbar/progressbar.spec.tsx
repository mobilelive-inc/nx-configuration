import { render } from '@testing-library/react';

import Progressbar from './progressbar';

describe('Progressbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Progressbar />);
    expect(baseElement).toBeTruthy();
  });
});
