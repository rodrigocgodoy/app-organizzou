import 'styled-components';
import dark from './dark';
import defaultTheme from './default';

declare module 'styled-components' {
  type Theme = typeof dark;

  export interface DefaultTheme extends Theme {};
}
