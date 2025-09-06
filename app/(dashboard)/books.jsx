import { StyleSheet} from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'


const Books = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText safe={true} title={true} style={styles.title}>
            Your Reading List
        </ThemedText>
        <Spacer height={20}/>

    </ThemedView>
  )
}

export default Books

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