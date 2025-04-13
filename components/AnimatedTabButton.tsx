import React, { useRef } from 'react';
import { TouchableOpacity, Animated, StyleSheet, GestureResponderEvent } from 'react-native';
import * as Haptics from 'expo-haptics';

interface AnimatedTabButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  isFocused: boolean;
  [key: string]: any; // Allow other props to pass through
}

export const AnimatedTabButton: React.FC<AnimatedTabButtonProps> = ({
  onPress,
  children,
  isFocused,
  ...props
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = (event: GestureResponderEvent) => {
    // Trigger haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // Animate the scale down and up
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    // Call the original onPress handler if it exists
    if (onPress) {
      onPress(event);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1} {...props}>
      <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 