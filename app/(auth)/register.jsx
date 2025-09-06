import { StyleSheet, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import React from 'react'




const Register = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = () => {

    console.log("Register Pressed", email, password)
}

  return (
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
        
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
            Create An Account
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
        <Link href="/login">
        <ThemedText style={{ textAlign: "center"}}>
            Login
        </ThemedText>
        </Link>


    </ThemedView>
    </TouchableWithoutFeedback>
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