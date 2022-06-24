import {SafeAreaView, View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native'

import {Header, Post, Stories} from '../components'
import {COLORS} from '../constants'
import {POSTS} from "../data/Posts";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
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