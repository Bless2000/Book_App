import { Image, useColorScheme } from 'react-native'

// Logo images
import LightLogo from "../assets/images/logo_transparent.png"
import DarkLogo from "../assets/images/logo.png"




const ThemedLogo = ({  ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />

  )
}

export default ThemedLogo