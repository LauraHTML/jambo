import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';
import AppBar from '@/components/molecules/appBar';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea} edges={[]}>
    <ThemeProvider value={DefaultTheme}>
      <AppBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="perfil" options={{ title: 'Perfil' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,

  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});
