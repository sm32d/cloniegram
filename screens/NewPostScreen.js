import {SafeAreaView, StatusBar} from "react-native";
import {COLORS} from "../constants";
import {AddNewPost} from "../components";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{
        backgroundColor: COLORS.black,
        flex: 1,
    }}>
        <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
        <AddNewPost />
    </SafeAreaView>
  );
}

export default NewPostScreen;