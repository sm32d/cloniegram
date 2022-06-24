import {Button, Image, Text, TextInput, View} from "react-native";
import {useState} from "react";

import * as Yup from "yup";
import {Formik} from "formik";
import validUrl from "valid-url";

import {COLORS, SIZES} from "../../constants";
import {Divider} from "react-native-elements";

const PLACEHOLDER_IMAGE = "https://tse4.mm.bing.net/th?id=OIP.B4mBEXOMnwoNxK87p8ShYAAAAA&pid=Api";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("Image is required"),
  caption: Yup.string().max(2200, 'Caption reached character limit')
})

const FormikPostUploader = ({navigation}) => {
    const  [thumnailUrl, setThumnailUrl] = useState(PLACEHOLDER_IMAGE);
  return (
      <Formik
        initialValues={{caption: "", imageUrl: ""}}
        onSubmit={(values) => {
            console.log(values)
            console.log('Your post was submitted successfully!')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
          {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
              <>
                  <View style={{
                      margin: SIZES.large,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                  }}>
                      <Image source={{uri: validUrl.is_uri(thumnailUrl) ? thumnailUrl : PLACEHOLDER_IMAGE}} style={{
                          width: 100,
                          height: 100,
                      }} />
                      <TextInput
                        placeholder= 'Write a caption...'
                        placeholderTextColor={COLORS.gray}
                        multiline={true}
                        style={{
                            color: COLORS.white,
                            fontSize: SIZES.large + 2,
                            flex: 1,
                            marginLeft: SIZES.small
                      }}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                        value={values.caption}
                      />
                  </View>

                  <View style={{marginHorizontal: SIZES.small, marginBottom: SIZES.base}}>
                      <TextInput
                          placeholder= 'Enter Image URL'
                          placeholderTextColor={COLORS.gray}
                          style={{
                              color: COLORS.white,
                              fontSize: SIZES.large,
                          }}
                          onChangeText={handleChange('imageUrl')}
                          onChange={(e) => setThumnailUrl(e.nativeEvent.text) }
                          onBlur={handleBlur('imageUrl')}
                          value={values.imageUrl}
                      />
                      {errors.imageUrl && (
                          <Text style={{
                              color: COLORS.error,
                              fontSize: SIZES.small,
                          }}>{errors.imageUrl}</Text>
                      )}
                  </View>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: SIZES.base,
                  }}>
                      <View style={{
                          width: '30%',
                      }}>
                          <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                      </View>
                  </View>
              </>
          )}
      </Formik>
  )
}

export default FormikPostUploader;