import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}> This is the Contact Page</Text>


      <ThemedText> More details will be added soon</ThemedText>


      <Link href="/" styles={styles.link}>
      <ThemedText>
      Index Page
      </ThemedText> 
      </Link>

      <Link href="/about" styles={styles.link}>
      <ThemedText>
      About Page 
      </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Contact

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
    link:{
        marginTop: 30,
        color: 'blue',
    } 
})