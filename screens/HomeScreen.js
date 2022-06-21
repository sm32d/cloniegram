import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native'

import { Header, Stories } from '../components'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen