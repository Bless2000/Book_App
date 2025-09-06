import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { Link } from 'expo-router'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const handleSubmit = () => {
    console.log("Register Pressed")
}


const Register = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
            Create An Account
        </ThemedText>
        <Spacer height={20}/>

        <ThemedButton onPress={handleSubmit} >
            <Text style={{color: 'white', fontWeight: 'bold'}}> Submit </Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href="/login">
        <ThemedText style={{ textAlign: "center"}}>
            Login
        </ThemedText>
        </Link>


    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
},
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
})