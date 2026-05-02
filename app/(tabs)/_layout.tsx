import { Tabs } from 'expo-router';

import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/haptic-tab';
import { IconExploreFill, IconHome, IconHomeFill, IconPlant, IconUser, IconUserFill } from '@/components/icons/icons';
import { Colors } from '@/constants/theme';

type IconeNav = {
  color: string,
  size: number,
  focused?: boolean,
}

//icones
function Home({ color, size, focused }: IconeNav) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? (
        <IconHomeFill size={size} color={color} />
      ) : (
        <IconHome size={size} color={color} />
      )}
    </View>
  );
}

function Explore({ color, size, focused }: IconeNav) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? (
        <IconExploreFill size={size} color={color} />
      ) : (
        <IconPlant size={size} color={color} />
      )}
    </View>
  );
}

function Profile({ color, size, focused }: IconeNav) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? (
        <IconUserFill size={size} color={color} />
      ) : (
        <IconUser size={size} color={color} />
      )}
    </View>
  );
}

const ACTIVE_COLOR = Colors.tabIconSelected;
const INACTIVE_COLOR = Colors.tabIconDefault;
const TAB_BAR_BG = Colors.colorBrown;

export default function TabLayout() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: ACTIVE_COLOR,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarStyle: {
              backgroundColor: TAB_BAR_BG,
              borderTopWidth: 0,
              elevation: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.08,
              shadowRadius: 12,
              height: Platform.OS === 'ios' ? 85 : 65,
              paddingBottom: Platform.OS === 'ios' ? 25 : 10,
              paddingTop: 10,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'absolute',
            },
          }}>

          <Tabs.Screen
            name="explorar"
            options={{
              title: 'Explorar',
              tabBarIcon: ({ color, focused }) => <Explore color={color} size={32} focused={focused} />,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (<Home color={color} size={32} focused={focused} />),
            }}
          />
          <Tabs.Screen
            name="perfil"
            options={{
              title: 'Perfil',
              tabBarIcon: ({ color, focused }) => <Profile color={color} size={32} focused={focused} />,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBrown,
    marginHorizontal: 16,
  },
  // Ícone: Casa
  iconHouseRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: -1,
  },
  iconHouseBody: {
    width: 14,
    height: 10,
    borderWidth: 2,
    borderTopWidth: 0,
  },

  // Ícone: Plus
  iconPlusH: {
    position: 'absolute',
    width: 18,
    height: 2.5,
    borderRadius: 2,
  },
  iconPlusV: {
    position: 'absolute',
    width: 2.5,
    height: 18,
    borderRadius: 2,
  },

  // Ícone: Lápis/Editar
  iconEditBody: {
    width: 14,
    height: 14,
    borderWidth: 2,
    transform: [{ rotate: '45deg' }],
    marginBottom: -4,
  },
  iconEditTip: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
});