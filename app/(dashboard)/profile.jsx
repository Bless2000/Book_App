import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'


 

const Profile = () => {

    const { logout, user } = useUser()

  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>
            Welcome, {user?.email} 
        </ThemedText>
        <Spacer height={20}/>

        <ThemedText>
            More details will be added soon
        </ThemedText>
        <Spacer />

        <ThemedButton onPress={logout}>
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}> Logout </ThemedText>
        </ThemedButton>

    </ThemedView>
  )
}

export default Profile

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