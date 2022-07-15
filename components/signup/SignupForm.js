import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Pressable
} from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import { firebase, db } from '../../firebase'

import { COLORS, SIZES } from '../../constants';

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = yup.object().shape({
        email: yup.string().required('An email is required').email(),
        username: yup.string().required('A username is required').min(3, 'Username must be at least 3 characters long'),
        password: yup.string().required('A password is required').min(6, 'Password must be at least 6 characters long')
    })

    const getRandomProfilePic = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        return data.results[0].picture.large;
    }

    const onSignup = async (email, username, password) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            db.collection('users').add({
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_pic: await getRandomProfilePic()
            })
            console.log('Signed up', email, username, password)
        } catch (error) {
            Alert.alert(
                'Oof! 🙈', error.message
            )
        }
    }

    return (
        <View style={{
            marginTop: 80
        }}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={(values) => {
                    onSignup(values.email, values.username, values.password)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <TextInput
                            placeholderTextColor={COLORS.gray}
                            placeholder="Email"
                            autoCapitalize={'none'}
                            keyboardType={'email-address'}
                            textContentType={"emailAddress"}
                            autoFocus={true}
                            style={[styles.inputFields,
                            { borderColor: values.email.length < 1 || Validator.validate(values.email) ? COLORS.white : COLORS.error },
                            ]}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <TextInput
                            placeholderTextColor={COLORS.gray}
                            placeholder="Username"
                            autoCapitalize={'none'}
                            textContentType={"username"}
                            style={[styles.inputFields,
                            { borderColor: 1 > values.username.length || values.username.length >= 3 ? COLORS.white : COLORS.error },
                            ]}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <TextInput
                            placeholderTextColor={COLORS.gray}
                            placeholder="Password"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            textContentType={"password"}
                            secureTextEntry={true}
                            style={[styles.inputFields,
                            { borderColor: 1 > values.password.length || values.password.length >= 6 ? COLORS.white : COLORS.error },
                            ]}
                            onChangeText={handleChange('password')}
                            onBlue={handleBlur('password')}
                            value={values.password}
                        />
                        <Pressable titleSize={SIZES.large}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                        >
                            <Text style={{
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: SIZES.medium,
                            }}>Sign Up</Text>
                        </Pressable>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            marginTop: SIZES.icon,
                        }}>
                            <Text style={{
                                color: COLORS.white,
                            }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: COLORS.lb }}>
                                    &nbsp;Log In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    inputFields: {
        borderRadius: 4,
        padding: SIZES.small,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.small,
        borderWidth: 1,
        color: COLORS.black
    },
    button: isValid => ({
        backgroundColor: isValid ? COLORS.blue : COLORS.lb,
        marginTop: SIZES.icon,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: SIZES.icon + 12,
        borderRadius: 4,
    })
})

export default SignupForm;