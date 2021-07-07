import { css } from 'styled-components';
import { mediaqueryBreakpoints } from '../../theme/defaultTheme';

export const desktopOnly = `@media only screen and (min-width: ${
  mediaqueryBreakpoints.md
})`;

const MediaQuery = {
  desktop: (...args) => css`
    ${desktopOnly} {
      ${css(...args)};
    }
  `,
};

export default MediaQuery;
