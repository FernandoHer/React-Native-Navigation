import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../themes/themes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop:40
    }}>
      <Text style={{ marginBottom: 20 }}> Profile </Text>
      <PrimaryButton
        onPress={() => navigation.dispatch( DrawerActions.toggleDrawer)}
        label='Return'
      />
    </View>
  )
}