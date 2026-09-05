import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, View, ViewProps } from 'react-native';

/** Shared falloff beyond floating navigation chrome. */
export const CHROME_BLUR_BLEED = 44;

type Props = ViewProps & {
  /** Blur strength at the anchored edge. */
  intensity?: number;
  /** Which edge the blur is anchored to (strongest there, fading away). */
  direction?: 'top' | 'bottom';
  /** Blur material + gradient color scheme. */
  tint?: 'light' | 'dark';
};

/**
 * Progressive (gradient) blur: one BlurView alpha-masked by an eased
 * gradient, so the material fades continuously with no layer seams —
 * full strength through the first 30%, easing to nothing at the far
 * edge. A soft gradient scrim keeps overlaid chrome legible.
 */
export function ProgressiveBlur({
  style,
  intensity = 40,
  direction = 'top',
  tint = 'dark',
  ...rest
}: Props) {
  const toEdge = direction === 'top' ? 'bottom' : 'top';
  const rgb = tint === 'dark' ? '0,0,0' : '255,255,255';
  // Android's BlurView draws a flat tint unless it is pointed at a
  // BlurTargetView, and that path (Dimezis under a MaskedView) segfaults the
  // render thread here, so Android keeps the tint and carries the legibility
  // on a heavier scrim instead: the gradient below is what keeps a header or
  // the tab bar readable over scrolling text without any blur behind it.
  const scrim =
    Platform.OS === 'android'
      ? `linear-gradient(to ${toEdge}, rgba(${rgb},0.96) 0%, rgba(${rgb},0.86) 30%, rgba(${rgb},0.55) 55%, rgba(${rgb},0.2) 80%, rgba(${rgb},0) 100%)`
      : `linear-gradient(to ${toEdge}, rgba(${rgb},0.70) 0%, rgba(${rgb},0.32) 42%, rgba(${rgb},0.08) 68%, rgba(${rgb},0) 88%)`;

  return (
    <View pointerEvents="none" style={style} {...rest}>
      <MaskedView
        style={StyleSheet.absoluteFill}
        maskElement={
          <View
            style={{
              flex: 1,
              experimental_backgroundImage: `linear-gradient(to ${toEdge}, rgb(0,0,0) 0%, rgb(0,0,0) 30%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.82) 58%, rgba(0,0,0,0.62) 70%, rgba(0,0,0,0.38) 81%, rgba(0,0,0,0.16) 91%, rgba(0,0,0,0) 100%)`,
            }}
          />
        }>
        <BlurView tint={tint} intensity={intensity} style={StyleSheet.absoluteFill} />
      </MaskedView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          experimental_backgroundImage: scrim,
        }}
      />
    </View>
  );
}
