import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

//components
import AppBar from "@/components/molecules/appBar";

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container} edges={[]}>
        <ScrollView style={styles.scrollView}>

        </ScrollView>
      </SafeAreaView>
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