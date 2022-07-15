import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

import { Formik } from "formik";
import * as yup from 'yup';
import Validator from 'email-validator'

const LoginForm = ({ navigation }) => {
    const LoginFormSchema = yup.object().shape({
        email: yup.string().required('An email is required').email(),
        password: yup.string().required('A password is required').min(6, 'Password must be at least 6 characters long')
    })

    return (
        <View style={{
            marginTop: 80
        }}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={LoginFormSchema}
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
                        <Text style={{
                            color: COLORS.lb,
                            alignSelf: 'flex-end',
                            marginBottom: SIZES.icon,
                        }}>Forgot Password?</Text>
                        <Pressable titleSize={SIZES.large}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                        >
                            <Text style={{
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: SIZES.medium,
                            }}>Login</Text>
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
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                                <Text style={{ color: COLORS.lb }}>
                                    &nbsp;Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View >
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
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: SIZES.icon + 12,
        borderRadius: 4,
    })
})

export default LoginForm;