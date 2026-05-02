import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IconSearch } from '@/components/icons/icons'

import Input from '@/components/atoms/input';
import { Colors, Borders } from '@/constants/theme'

export default function SearchBar () {
  const [search, onChangeSearch] = React.useState('');

  return (
    <View style={styles.input}>
        <Input value={search} onChangeText={onChangeSearch} placeholder='Pesquisar...' />
        <View style={styles.iconView}>
          <IconSearch size={32} color={Colors.colorBrown} />  
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 4,
    height: 44,
    padding: 2,
    width: '90%',
    borderRadius: Borders.roundedXl,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.inputBackground
  },
  iconView:{
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  }
});