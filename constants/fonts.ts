import type { TextStyle } from 'react-native';

/** One face of the app typeface: the family plus, where the platform resolves
 * weight inside a family, the weight. Spread it into a style. */
export type FontFace = Pick<TextStyle, 'fontFamily' | 'fontWeight'>;

export type FontFaceName = 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';

/** SF Pro Rounded — the iOS and web typeface, loaded at runtime in the root
 * layout. Each entry names a single-face family, so no `fontWeight` is set:
 * pairing a face with a mismatched weight makes iOS synthesize or fall back to
 * the system font. Android resolves `fonts.android.ts` (Google Sans Flex
 * Rounded) with the same keys. */
export const fonts = {
  regular: { fontFamily: 'SFProRounded-Regular' },
  medium: { fontFamily: 'SFProRounded-Medium' },
  semibold: { fontFamily: 'SFProRounded-Semibold' },
  bold: { fontFamily: 'SFProRounded-Bold' },
  heavy: { fontFamily: 'SFProRounded-Heavy' },
} as const satisfies Record<FontFaceName, FontFace>;
