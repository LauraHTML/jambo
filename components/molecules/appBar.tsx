import { Colors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { IconUser, IconNotification, IconProfile } from "../icons/icons";

import { useRouter, usePathname } from 'expo-router';

export default function AppBar({ name = 'nome top' }) {
    const router = useRouter();
    const pathname = usePathname(); 

    if (pathname === '/perfil' || pathname === 'perfil') {
        return (
            <SafeAreaView edges={['top']}>
                <View style={styles.profile}>
                <View style={styles.profileView}>
                    <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.buttonUser}>
                    <IconProfile size={34} color={Colors.text} />
                </TouchableOpacity>
                <Text style={styles.name}>{name}</Text>
                </View>

                <View style={styles.buttonNotification}>
                    <TouchableOpacity onPress={() => router.push('/explorar')} style={styles.buttonUser}>
                        <IconNotification size={34} color={Colors.text} />
                    </TouchableOpacity> 
                </View>
            </View>
            </SafeAreaView>
        )
    }
    else {
        return (
        <SafeAreaView edges={['top']}>
            <View style={styles.container}>
                <View style={styles.profileView}>
                    <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.buttonUser}>
                    <IconProfile size={34} color={Colors.text} /> 
                </TouchableOpacity>
                <Link href="/(tabs)/perfil" style={styles.link}>Meu perfil</Link>
                </View>
            </View>
        </SafeAreaView>
        )
    }

};

const styles = StyleSheet.create({
    safeArea:{
    flex: 1,
  },
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: Colors.background,
    },
    link: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonUser: {
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonNotification: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
    },
    profile: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: Colors.background,
    },
    profileView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});