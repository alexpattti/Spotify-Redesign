import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HistorySvg from '@/assets/Icons/Name=History, Filled=No.svg';
import SettingsSvg from '@/assets/Icons/Name=Settings, Filled=No.svg';
import WhatsNewSvg from '@/assets/Icons/Name=News, Filled=No.svg';
import RightArrowSvg from '@/assets/Icons/Property 1=Right.svg';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AccountScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <ScrollView>
        <ThemedView style={styles.listContainer}>
          {/* Listening History */}
          <TouchableOpacity style={[styles.listItem, styles.borderBottom]}>
            <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
              <HistorySvg width={40} height={40} color={Colors[theme].text} />
              <ThemedText style={styles.listItemText}>Listening history</ThemedText>
              <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
            </ThemedView>
          </TouchableOpacity>

          {/* Settings and Privacy */}
          <TouchableOpacity 
            style={[styles.listItem, styles.borderBottom]}
            onPress={() => router.push('/(settings)')}
          >
            <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
              <SettingsSvg width={40} height={40} color={Colors[theme].text} />
              <ThemedText style={styles.listItemText}>Settings and Privacy</ThemedText>
              <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
            </ThemedView>
          </TouchableOpacity>

          {/* What's New */}
          <TouchableOpacity style={styles.listItem}>
            <ThemedView style={[styles.listItemContent, { backgroundColor: Colors[theme].background }]}>
              <WhatsNewSvg width={40} height={40} color={Colors[theme].text} />
              <ThemedText style={styles.listItemText}>What's New</ThemedText>
              <RightArrowSvg width={40} height={40} color={Colors[theme].text} style={styles.arrow} />
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // shrinks the entire button away from the sides
  },
  listContainer: {
    marginTop: 8,
  },
  listItem: {
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#333333',
  },
  listItemContent: { // this is the container that holds the icon and the text
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15, // changes the distance between the icon and the text
  },
  listItemText: {
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    marginLeft: 'auto',
  },
});