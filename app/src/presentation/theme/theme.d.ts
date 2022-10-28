import 'styled-components/native';
import { darkTheme } from '.'

declare module 'styled-components/native' {
	type ThemeType = typeof darkTheme;

	export interface DefaultTheme extends ThemeType {}
}