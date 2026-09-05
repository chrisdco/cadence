import type { TextStyle } from 'react-native';

export type FontFace = Pick<TextStyle, 'fontFamily' | 'fontWeight'>;

export type FontFaceName = 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';

/** Google Sans Flex Rounded — the Android typeface. One family with nine
 * weights (100–900), linked at build time by the expo-font config plugin as an
 * Android font XML resource, so `fontWeight` picks the real face on API 28+.
 * The files in `assets/fonts/android/` are static instances of the Google Sans
 * Flex variable font with ROND pinned to 100 (full roundness) and opsz to 18;
 * React Native has no `fontVariationSettings`, so the axis is baked in. Same
 * keys as the iOS `fonts.ts`. */
const family = 'GoogleSansFlexRounded';

export const fonts = {
  regular: { fontFamily: family, fontWeight: '400' },
  medium: { fontFamily: family, fontWeight: '500' },
  semibold: { fontFamily: family, fontWeight: '600' },
  bold: { fontFamily: family, fontWeight: '700' },
  heavy: { fontFamily: family, fontWeight: '800' },
} as const satisfies Record<FontFaceName, FontFace>;
