import {View, Text, ScrollView, Image} from 'react-native'
import {COLORS, SIZES} from "../../constants";
import {USERS} from "../../data/Users";

const Stories = () => {
    return (
        <View style={{
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{alignItems:'center', marginVertical: 15, marginHorizontal: 2}}>
                        <Image source={{uri: story.image}} style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            marginLeft: 6,
                            borderWidth: 3,
                            borderColor: COLORS.primary,
                        }}/>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: SIZES.small,
                            marginTop: 5,
                            paddingLeft: 7
                        }}>
                            {story.user.length > 9 ? story.user.slice(0, 9).toLowerCase() + '..' : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories