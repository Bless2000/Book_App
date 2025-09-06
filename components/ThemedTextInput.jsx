import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({ style , ...props}) => {

    const colorScheme = useColorScheme()
    const theme =  Colors[colorScheme] ?? Colors.light

  return (
    <TextInput
        style={[{ 
            borderWidth: 1,
            borderColor: theme.borderColor,
            padding: 10,
            color: theme.text,
            backgroundColor: theme.uiBackground,
            textAlign: 'center',
            width: '80%',
            borderRadius: 5,
            }, style]}
            {...props}
            />
    
  )
}

export default ThemedTextInput