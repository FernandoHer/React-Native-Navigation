import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalColors, globalStyles } from '../../themes/themes'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
    label: string,
    onPress: () => void
}

export const PrimaryButton = ({
    label,
    onPress
}: Props) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => onPress()}
            style={({pressed}) => ({
                ...globalStyles.primaryButton,
                opacity: (pressed) ? 0.7 : 1
            })}>
            <Text style={{
                ...globalStyles.buttonText
                }}>{label}</Text>
        </Pressable>
    )
}

