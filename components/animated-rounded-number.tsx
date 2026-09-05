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

/** Android/web fallback for the iOS SwiftUI numeric-text transition. */
export function AnimatedRoundedNumber({
  text,
  color,
  fontSize,
  font,
}: AnimatedRoundedNumberProps) {
  return <Text style={[font, { color, fontSize }]}>{text}</Text>;
}
