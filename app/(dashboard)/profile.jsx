import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'




const porfile = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>
            User Profile Page
        </ThemedText>
        <Spacer height={20}/>

        <ThemedText>
            More details will be added soon
        </ThemedText>
        <Spacer />
    </ThemedView>
  )
}

export default porfile

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