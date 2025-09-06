import { View, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedCard = ({ style, ...props }) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{ backgroundColor: theme.uibackground}, styles.card, style ]}  {...props} />

  )
}

export default ThemedCard


const styles = StyleSheet.create({
    card:{
        borderRadius: 5,
        padding: 20,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        elevation: 3,
        marginVertical: 10,
        width: '90%',
    }
})