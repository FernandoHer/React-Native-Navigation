import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../themes/themes';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 20 }}> SettingsScreen </Text>
      <PrimaryButton
        onPress={() => navigation.goBack()}
        label='Return'
      />
      <PrimaryButton
        onPress={() => navigation.dispatch( StackActions.popToTop())}
        label='Return to Home'
      />

    </View>
  )
}