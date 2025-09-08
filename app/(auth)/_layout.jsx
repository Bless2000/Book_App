import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"
import { useRouter } from "expo-router"
import { Text } from "react-native"

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile") // redirect logged-in users
    }
  }, [user, authChecked])

  if (!authChecked) {
    return <Text>Loading...</Text> // only show while auth check is in progress
  }

  return children
}

export default GuestOnly
