import './react.module.scss';
import { ThemeProvider } from 'styled-components';
import theme from './theme/defaultTheme';
import Text from './typography';
/* eslint-disable-next-line */
export interface ReactProps {}

export function React(props: ReactProps) {
  return (
    <ThemeProvider theme={theme}>
      <Text bold fontSize="fontSizeH1">This is react-story</Text>
    </ThemeProvider>
  );
}

export default React;
