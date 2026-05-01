import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

 type Input ={
    placeholder: string,
    autoComplete?: 'off' | 'email' | 'current-password',
    value?: string | number,
    onChangeValue?: string | number,
    keyboardType: 'default' | 'numeric'
  }

export default function Input ({placeholder, autoComplete = 'off', value, keyboardType = 'default', onChangeValue}:Input) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
        <TextInput
          onChangeText={onChangeValue}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({

});
