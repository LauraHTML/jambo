import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//components
import Button from '@/components/atoms/button'

export default function Explorar() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <View style={styles.scrollView}>
            <Image style={styles.image} source={require('../../assets/images/sobre.jpg')} />
            <Text style={styles.text}>
              components
            </Text>
            <Button buttonText={'ola'} style={'outline'} />
            <Button buttonText={'ola'} style={'default'} />
            <Button buttonText={'ola'} style={'secondary'} />
            <Button buttonText={'ola'} style={'ghost'} />
            <Button buttonText={'ola'} style={'destructive'} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
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