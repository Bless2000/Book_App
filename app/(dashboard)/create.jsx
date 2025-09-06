import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const Create = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
            Create New Book
        </ThemedText>
        <Spacer height={20}/>

        <ThemedButton >
            <ThemedText style={{color: 'white', fontWeight: 'bold'}}> Create Book </ThemedText>
        </ThemedButton>
    </ThemedView>
  )
}

export default Create

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
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    pressed: {
        opacity: 0.75,
    },
})