import { render } from '@testing-library/react';

import Progressbar from './progressbar';

describe('Progressbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Progressbar progressbarheading='Progress' progressbarstatus={100} />);
    expect(baseElement).toBeTruthy();
  });
});
