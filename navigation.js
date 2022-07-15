import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator()

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack;