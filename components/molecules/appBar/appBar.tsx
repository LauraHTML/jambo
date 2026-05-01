import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/theme';
import { IconUser } from "../../icons/icons"

import { useRouter } from 'expo-router'

export default function AppBar({ title = 'Meu perfil'}) {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/perfil')}>
                <IconUser />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: Colors.colorGreenPrimary
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});