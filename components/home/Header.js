import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { AntDesign } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';

const Header = () => {
    let [fontsLoaded] = useFonts({
        'Satisfy': require('../../assets/fonts/Satisfy-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={{
            marginTop: StatusBar.currentHeight,
            paddingHorizontal: SIZES.large + 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <TouchableOpacity>
                <Text style={{
                    fontFamily: 'Satisfy',
                    color: COLORS.white,
                    fontSize: SIZES.icon,
                }}>
                    Cloniegram
                </Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity style={styles.icons}>
                    <View style={{
                        backgroundColor: '#ff3250',
                        position: 'absolute',
                        top: -10,
                        right: -5,
                        height: SIZES.large,
                        width: SIZES.large,
                        borderRadius: SIZES.extraLarge,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: SIZES.small
                        }}>8</Text>
                    </View>
                    <AntDesign name="message1" size={SIZES.extraLarge} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <AntDesign name="hearto" size={SIZES.extraLarge} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <AntDesign name="pluscircleo" size={SIZES.extraLarge} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    icons: {
        paddingLeft: SIZES.small
    }
})