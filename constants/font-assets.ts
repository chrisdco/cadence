import { fonts } from './fonts';

/** Native runtime font map, including every face used by the app. */
export const fontAssets = {
  [fonts.regular.fontFamily]: require('@/assets/fonts/SF-Pro-Rounded-Regular.otf'),
  [fonts.medium.fontFamily]: require('@/assets/fonts/SF-Pro-Rounded-Medium.otf'),
  [fonts.semibold.fontFamily]: require('@/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
  [fonts.bold.fontFamily]: require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
  [fonts.heavy.fontFamily]: require('@/assets/fonts/SF-Pro-Rounded-Heavy.otf'),
};
