import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (

    <>
    <StatusBar value="auto" />
    <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
        headerTitleStyle: {fontWeight: 'bold'},
        contentStyle: {backgroundColor: theme.background,}
     }}>

        <Stack.Screen name='index' options={{title: 'Home Page'}}/>

     <Stack.Screen name='(auth)' options={{headerShown: false}}/>

      <Stack.Screen name='(dashbaord)' options={{headerShown: false}}/>


     

        

    </Stack>

    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})