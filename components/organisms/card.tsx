import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme'

export default function Card() {
  return (
    <View style={styles.card}>
        <Image source={require('@/assets/images/sobre.jpg')} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 32,
    borderWidth: 2,
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});