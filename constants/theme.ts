/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#fff4e0';

export const Colors = {
    text: '#333333',
    background: '#fff4e0',
    tint: tintColorLight,
    icon: '#687076',

    colorGreenPrimary: '#225D2D',
    colorGreenSecondary: '#94b506',
    colorPink: '#F3D8F9',
    colorPurple: '#b1b7eb',
    colorYellow: '#F3C10A',
    colorBrown: '#3c2f07',

    colorDestructive: '#ffb6b3',
    textColorDestructive: '#f85149',

    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});


//bordas
export const Borders = {
  roundedSm: 4,
  roundedMd: 6,
  roundedLg: 8,
  roundedXl: 12,

  //width
  border: 1,
  borderSm: 2,
  borderMd: 3,
  borderLg: 4,
}