import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

//components
import SearchBar from '@/components/molecules/searchBar';
import PlantCard from '@/components/organisms/card'

export default function Explorar() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.text}>
              components
            </Text>
            <SearchBar />
        <ScrollView>
          <View style={styles.scrollView}>
            <PlantCard
              image={{ uri: 'https://example.com/lavanda.jpg' }}
              title="Lavanda"
              description="Planta perene de origem mediterrânea, conhecida pelo seu aroma floral intenso e flores lilases. Ideal para bordaduras e vasos."
              sunExposure="Pleno sol"
              wateringFrequency="2x por semana"
              categories={['ornamental', 'aromática', 'medicinal']}
              onPress={() => console.log('card pressionado')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  scrollView: {
    backgroundColor: Colors.background
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 32,
    borderWidth: 2,
  },
});