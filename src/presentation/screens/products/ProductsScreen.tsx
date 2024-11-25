import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../themes/themes'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'

const products = [
  { id: 1, name: 'Naranjas' },
  { id: 2, name: 'Peras' },
  { id: 3, name: 'Papayas' },
  { id: 4, name: 'Sandias' },
  { id: 5, name: 'Uvas' },
  { id: 6, name: 'Plátanos' },
]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 15, fontSize: 30 }}> Productos </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate( 'Product', {id: item.id, name: item.name})}
            label={item.name}
          />
        )}
      />
      <Text style={{ marginBottom: 15, fontSize: 30 }}> Ajustes </Text>
      <PrimaryButton
        onPress={() => navigation.navigate( 'Settings'  as never)}
        label='Ajustes'
      />
    </View>
  )
}