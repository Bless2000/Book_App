import { StyleSheet, SafeAreaView, Pressable, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import React from 'react'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const Login = () => {


    const handleSubmit = () => {
        console.log("Login Pressed", email, password)
    }

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


  return (
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
            Login To Your Account
        </ThemedText>
        <Spacer height={20}/>

        <ThemedTextInput 
        style= {{ marginBottom: 20}}
        keyboardType='email-address'
        onChangeText={setEmail}
        value={email}
        placeholder='email'  />


            <ThemedTextInput
            style= {{ marginBottom: 20}}
            secureTextEntry={true}
            placeholder='password' 
            onChangeText={setPassword}
            value={password}
             />

        <ThemedButton onPress={handleSubmit} >
            <Text style={{color: 'white', fontWeight: 'bold'}}> Submit </Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href="/register">
        <ThemedText style={{ textAlign: "center"}}>
        Register Instead
        </ThemedText>
        </Link>

            <Link href="/" style={[styles.link, { marginTop: 30 }]}> <ThemedText>
            Home Page
            </ThemedText>
            </Link>


    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

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
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.75,
    }
})