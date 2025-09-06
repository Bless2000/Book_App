import { StyleSheet, Pressable } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, ...props}) => {
  return (
    <Pressable
    style={({ pressed }) => [
        styles.button, pressed && styles.pressed, style
    ]}
    {...props}
    />
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
},
    pressed: {
        opacity: 0.75,
    }
}
)

export default ThemedButton

