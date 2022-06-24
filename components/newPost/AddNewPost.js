import {Text, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import {COLORS, SIZES} from "../../constants";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => {
    return(
        <View style={{
            marginHorizontal: SIZES.base + 2,
            marginTop: SIZES.base,
        }}>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.base,
    }}>
        <TouchableOpacity>
            <Ionicons name="arrow-back" size={SIZES.icon} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={{
            color: COLORS.white,
            fontSize: SIZES.large,
            fontWeight: '600',
            marginRight: SIZES.large
        }}>New Post</Text>
        <Text></Text>
    </View>
)

export default AddNewPost;