import {SafeAreaView, StatusBar} from "react-native";
import {COLORS} from "../constants";
import {AddNewPost} from "../components";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
        backgroundColor: COLORS.black,
        flex: 1,
    }}>
        <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
        <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}

export default NewPostScreen;