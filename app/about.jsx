import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'



const About = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    
    <ThemedView style={[styles.container , {backgroundColor: theme.background}]}>
      <ThemedText style={styles.title} title={true}>Welcome To The About Pge</ThemedText>

        <ThemedText style={{marginTop: 30}}> 
            Reading about Expo Router
        </ThemedText>

      <Link href="/" style={styles.link}><ThemedText>Index Page </ThemedText> </Link>

        <Link href="/contact" style={styles.link}>
        <ThemedText>
        Contact Page
        </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default About

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