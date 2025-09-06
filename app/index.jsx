import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Logo from '../assets/images/logo.png'

// Themed Components
import ThemedView from "../components/ThemedView"
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedLogo style={styles.icon}/>
        <Spacer height={20}/>

      <ThemedText style={styles.title} title={true}>Hello, Expo </ThemedText>

    <Spacer height={30}/>
      <ThemedText > Welcome to my first app</ThemedText>
    <Spacer />

    <Link href="/login" style={[styles.link, { marginTop: 30 }]}> <ThemedText>
            Login Page
            </ThemedText>
    </Link>

        <Link href="/profile" style={[styles.link, { marginTop: 30 }]}> <ThemedText>
            Profile Page
            </ThemedText>
    </Link>


    <Link href="/register" style={styles.link}>
    <ThemedText>
            Register Page
    </ThemedText>
    </Link>
 
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
    }, 
    icon:{
        width: 100,
        height: 100,
        resizeMode: 'contain',

    },
     link:{
        fontSize: 17,  
        color: 'red',
    } 

})