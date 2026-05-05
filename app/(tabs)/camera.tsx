import React, { useEffect } from 'react'
import { Camera, useCameraPermission } from 'react-native-vision-camera'

export default function TelaCamera() {
  const { hasPermission, requestPermission } = useCameraPermission()

  useEffect(() => {
    if (!hasPermission) requestPermission()
  }, [hasPermission, requestPermission])

  return (
    <Camera
      style={{ flex: 1 }}
      isActive={true}
      device="back"
    />
  )
}