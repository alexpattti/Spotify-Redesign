import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AboutPage() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <ThemedText style={styles.text}>About Spotify</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
  },
}); 