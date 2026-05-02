import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme'

//components
import CardPlantas from '@/components/organisms/cardPlantas'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <ScrollView style={styles.scrollView}>
        <CardPlantas
          image={require('@/assets/images/sobre.jpg')}
          title={'teste'}
          sunExposure={'super sol'}
          wateringFrequency={'aguar'}
          categories={['medicinal']}
        />
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