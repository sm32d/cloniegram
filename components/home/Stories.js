import {View, Text, ScrollView, Image} from 'react-native'
import {COLORS} from "../../constants";
import {USERS} from "../../data/Users";

const Stories = () => {
    return (
        <View style={{
            marginBottom: 13
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{alignItems:'center', marginVertical: 15}}>
                        <Image source={{uri: story.image}} style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            marginLeft: 6,
                            borderWidth: 3,
                            borderColor: COLORS.primary,
                        }}/>
                        <Text style={{
                            color: COLORS.white
                        }}>
                            {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories