import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.accent} accessible={false} />
          <Text accessibilityRole="header" style={styles.title}>
            LandingCheck
          </Text>
          <Text style={styles.description}>
            Analyze your basketball landings to understand your balance, alignment, and control.
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => setShowNotice(true)}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>Start Analysis</Text>
          </Pressable>
          {showNotice && (
            <Text accessibilityLiveRegion="polite" style={styles.notice}>
              Landing analysis is coming soon.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'web' ? 112 : 48,
    paddingBottom: 48,
  },
  hero: {
    width: '100%',
    maxWidth: 440,
    alignItems: 'flex-start',
  },
  accent: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EA580C',
    marginBottom: 24,
  },
  title: {
    color: '#111827',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1.5,
    marginBottom: 16,
  },
  description: {
    color: '#4B5563',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 32,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: '#C2410C',
  },
  buttonPressed: {
    backgroundColor: '#9A3412',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  notice: {
    color: '#4B5563',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 16,
  },
});
