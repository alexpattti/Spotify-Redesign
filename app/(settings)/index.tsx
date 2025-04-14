import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import RightArrowSvg from '@/assets/Icons/Property 1=Right.svg';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SettingsPage() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  return (
    <ThemedView style={styles.container}>
      {/* Account */}
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => router.push('/(settings)/account')}
      >
        <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
          <ThemedText style={styles.listItemText}>Account</ThemedText>
          <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
        </ThemedView>
      </TouchableOpacity>
      {/* About */}
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => router.push('/(settings)/about')}
      >
        <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
          <ThemedText style={styles.listItemText}>About</ThemedText>
          <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
        </ThemedView>
      </TouchableOpacity>
      {/* Playback */}
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => router.push('/(settings)/playback')}
      >
        <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
          <ThemedText style={styles.listItemText}>Playback</ThemedText>
          <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#333333',
    // save listItem{} for later in to know what it is.
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 1,
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
  },
  arrow: {
    marginLeft: 'auto',
  },
}); 