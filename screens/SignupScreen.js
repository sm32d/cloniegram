import { Image, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SignupForm } from "../components";

const LoginScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.black,
            paddingTop: 50,
            paddingHorizontal: SIZES.small
        }}>
            <View style={{
                alignItems: 'center',
                marginTop: 60
            }}>
                <Image source={require('../assets/logo.png')} style={{
                    width: 100,
                    height: 100
                }} />
            </View>
            <SignupForm />
        </View>
    );
}

export default LoginScreen;