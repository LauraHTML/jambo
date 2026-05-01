import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme'

//components
import AppBar from "@/components/molecules/appBar/appBar";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <AppBar />
        <ScrollView style={styles.scrollView}>
          
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});