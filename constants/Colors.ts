/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const spotifyGreen = '#1ed760';

export const Colors = {
  light: {
    text: '#303030', // dark gray for text
    background: '#f2f2f2', // very light gray
    tabIconDefault: '#e8e8e8', // medium-light gray
    tabIconSelected: spotifyGreen, 
  },

  dark: {
    text: '#fff', 
    background: '#121212', //very dark gray
    tabIconDefault: '#9A9A9A', //medium-dark gray
    tabIconSelected: '#fff', //white
  },
};