import { theme } from '@/theme'
import { View, Text, StyleSheet } from 'react-native'



export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.black,
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
    }
})