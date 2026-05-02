import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

//components
import AppBar from '@/components/molecules/appBar';
import SearchBar from '@/components/molecules/searchBar';
import PlantCard from '@/components/organisms/card';
import Grid from '@/components/molecules/grid';

export default function Explorar() {

  return (
      <SafeAreaView style={styles.container} edges={[]}>
        <SearchBar />
        {/* <ScrollView>
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
        </ScrollView> */}
        <Grid />
      </SafeAreaView>
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