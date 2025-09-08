import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from '@expo/vector-icons'
import UserOnly from "../../components/auth/UserOnly"



const DashbaordLayout = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserOnly>
    <Tabs 
        screenOptions={{headerShown: false, tabBarStyle: {backgroundColor : theme.navBackground , 
         paddingTop:10,
         height: 90 },
         tabBarActiveTintColor: theme.IconColorFocused,
         tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
         tabBarInactiveBackgroundColor: theme.IconColor
        }}
    >

        <Tabs.Screen 
        name="profile" options={{title: 'Profile', tabBarIcon: ({ focused }) => (
            <Ionicons name={ focused ? "person-circle" : "person-circle-outline" } size={30} color={theme.IconColorFocused} />
        )}} />

        <Tabs.Screen 
        name="books" options={{title: 'Books', tabBarIcon: ({ focused}) => (
            <Ionicons name={ focused ? "book" : "book-outline" } size={30} color={theme.IconColorFocused} />
        )}} />

        <Tabs.Screen 
        name="create" options={{title: 'Create', tabBarIcon: ({ focused }) => (
            <Ionicons name={ focused ? "create" : "create-outline" } size={30} color={theme.IconColorFocused} />
        )}} />

    </Tabs>
    </UserOnly>
  )
}

export default DashbaordLayout

