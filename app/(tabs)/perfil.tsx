import Tabs from '@/components/organisms/tabsPanel';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

//components
import Grid from '@/components/molecules/grid';
import CardPlantas from '@/components/organisms/cardPlantas';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.scrollView}>
        <Tabs
          tabs={[
            {
              key: "lista",
              label: "Lista",
              content: <CardPlantas
                image={require('@/assets/images/sobre.jpg')}
                title={'teste'}
                sunExposure={'super sol'}
                wateringFrequency={'aguar'}
                categories={['medicinal']}
              />,
            },
            {
              key: "calendario",
              label: "Calendário",
              content: <Grid />,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});