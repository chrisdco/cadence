import { fonts } from './fonts';

/** The landing page uses four faces; the native-only heavy face stays out of web. */
export const fontAssets = {
  [fonts.regular.fontFamily]: require('@/assets/fonts/marketing/SF-Pro-Rounded-Regular.woff2'),
  [fonts.medium.fontFamily]: require('@/assets/fonts/marketing/SF-Pro-Rounded-Medium.woff2'),
  [fonts.semibold.fontFamily]: require('@/assets/fonts/marketing/SF-Pro-Rounded-Semibold.woff2'),
  [fonts.bold.fontFamily]: require('@/assets/fonts/marketing/SF-Pro-Rounded-Bold.woff2'),
};
