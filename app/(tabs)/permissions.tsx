import React from 'react';
import * as ExpoMediaLibrary from 'expo-media-library';
import { Camera, PermissionStatus } from 'react-native-vision-camera';
import { Stack, router } from 'expo-router';

import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';

export default function PermissionsScreen() {
    const [cameraPermissionStatus, setCameraPermissionStatus] = React.useState<PermissionStatus>("not-determined");
    const [mediaLibraryPermission, requestMediaLibraryPermission] = ExpoMediaLibrary.usePermissions();

    const requestCameraPermission = async () => {
        const permission = await Camera.requestCameraPermission();
        setCameraPermissionStatus(permission);
    };

    const handleContinue = () => {
        if (cameraPermissionStatus === 'authorized' || mediaLibraryPermission?.granted){
            router.replace('/');
        }
        else{
            Alert.alert('Por favor habilite o acesso a câmera e a galeria nas configurações do dispositivo');
        }
    }

    return (
        <>
        <Stack.Screen options={{headerTitle: 'Permições'}} />
        <View>
            <Text>Jambo precisa de algumas permissões para habilitar todas as suas funcionalidades</Text>

            <View>
                <Text>Permitir acesso a câmera</Text>
                <Switch trackColor={{true: 'orange'}}
                value={cameraPermissionStatus === 'authorized'}
                // onChange={}
                />
            </View>
            <View>
                <Text>Permitir acesso a galeria</Text>
                <Switch trackColor={{true: 'orange'}}
                value={mediaLibraryPermission?.granted}
                // onChange={}
                />
            </View>
            <TouchableOpacity>
                <Text>Continuar</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    subtitle:{
        textAlign: 'center'
    }

 })