import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { type RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../themes/themes';





export  const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style= {globalStyles.container}>
      <Text> Product Screen </Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }}>
        { params.id } - { params.name }
      </Text>
    </View>
  )
}


