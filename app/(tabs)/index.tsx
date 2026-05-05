import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Redirect ,useRouter } from 'expo-router';

import { Colors } from '@/constants/theme';

//components
import AppBar from '@/components/molecules/appBar';
import SearchBar from '@/components/molecules/searchBar';
import PlantCard from '@/components/organisms/card';
import Grid from '@/components/molecules/grid';

export default function HomeScreen() {

  const { hasPermission } = useCameraPermission();
  //camera de tras
  const device = useCameraDevice('back');

  const router = useRouter();
  const redirectToPermissions = !hasPermission;

  if (redirectToPermissions) {
    return <Redirect href={'/permissions'} />
  }

  if(!device){
    return( <Text>Sem câmera</Text>)
  }

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.colorBrown} 
        barStyle="light-content"  
      />
      <SearchBar />
      <Image height={32} width={32} source={require('@/assets/images/cameraAiFocused.svg')} />
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