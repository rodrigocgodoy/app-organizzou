import 'styled-components';
import dark from './dark';

declare module 'styled-components' {
  type Theme = typeof dark;

  export interface DefaultTheme extends Theme {}
}
