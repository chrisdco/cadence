import { Text } from 'react-native';

import type { FontFace } from '@/constants/theme';

export type AnimatedRoundedNumberProps = {
  text: string;
  value: number;
  color: string;
  fontSize: number;
  /** The face to render with on Android and web; iOS uses `weight` instead. */
  font: FontFace;
  /** Subset of SwiftUI's Font.Weight the app actually uses. */
  weight: 'semibold' | 'bold' | 'heavy';
  duration: number;
};

/** Line box as a multiple of the size. The callers size their boxes to the
 * digits (a 56px score in a 64px box), and SwiftUI on iOS renders the glyphs
 * with roughly this much leading, so the fallback matches it instead of the
 * font's own, taller line box. */
const LINE_HEIGHT_RATIO = 1.15;

/** Android/web fallback for the iOS SwiftUI numeric-text transition.
 *
 * The line height is pinned and Android's font padding is off: Google Sans
 * Flex Rounded carries a tall ascent, so a bare `Text` sat low in the daily
 * goal hollow and the 56px results score overflowed its 64px box and clipped
 * at the bottom. Digits have no descenders, so the tight box loses nothing. */
export function AnimatedRoundedNumber({
  text,
  color,
  fontSize,
  font,
}: AnimatedRoundedNumberProps) {
  return (
    <Text
      style={[
        font,
        {
          color,
          fontSize,
          lineHeight: Math.round(fontSize * LINE_HEIGHT_RATIO),
          includeFontPadding: false,
          textAlignVertical: 'center',
        },
      ]}>
      {text}
    </Text>
  );
}
