import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeSvg from '@/assets/Icons/Property 1=Home.svg';
import HomeFilledSvg from '@/assets/Icons/Name=Home, Filled=Yes.svg';
import DiscoverSvg from '@/assets/Icons/Name=Discover, Filled=No.svg';
import DiscoverFilledSvg from '@/assets/Icons/Name=Discover, Filled=Yes.svg';
import SearchSvg from '@/assets/Icons/Property 1=Search.svg';
import SearchFilledSvg from '@/assets/Icons/Name=Search, Filled=Yes.svg';
import LibrarySvg from '@/assets/Icons/Property 1=Library.svg';
import LibraryFilledSvg from '@/assets/Icons/Name=Library, Filled=Yes.svg';
import AccountSvg from '@/assets/Icons/Property 1=User.svg';
import AccountFilledSvg from '@/assets/Icons/Name=User, Filled=Yes.svg';
import { AnimatedTabButton } from '@/components/AnimatedTabButton';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  /* Think of this as the first floor of the house (app). This is specifically designed for the tab navigation of the app. It's nested inside the root layout and it focuses on:
    - Creating the bottom tab bar
    - Setting up the tab icons and their appearance
    - Managing the tab-specific navigation */
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tabIconSelected,
        tabBarInactiveTintColor: Colors[theme].tabIconDefault,
        headerShown: false,
        tabBarButton: (props) => (
          <AnimatedTabButton {...props} isFocused={props.accessibilityState?.selected || false} />
        ),
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => 
            focused ? (
              <HomeFilledSvg width={40} height={40} color={color} />
            ) : (
              <HomeSvg width={40} height={40} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => 
            focused ? (
              <DiscoverFilledSvg width={40} height={40} color={color} />
            ) : (
              <DiscoverSvg width={40} height={40} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <SearchFilledSvg width={40} height={40} color={color} />
            ) : (
              <SearchSvg width={40} height={40} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <LibraryFilledSvg width={40} height={40} color={color} />
            ) : (
              <LibrarySvg width={40} height={40} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Me',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AccountFilledSvg width={40} height={40} color={color} />
            ) : (
              <AccountSvg width={40} height={40} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
