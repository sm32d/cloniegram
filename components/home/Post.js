import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Divider} from "react-native-elements";
import { Entypo, AntDesign, Ionicons, FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';

import {COLORS, SIZES} from "../../constants";

const Post = ({post}) => {
  return (
      <View style={{marginBottom: SIZES.icon}}>
          <Divider width={1} orientation="vertical" />
          <PostHeader post={post} />
          <PostImage post={post} />
          <PostFooter post={post} />
          <Text style={{
              color: COLORS.white,
              fontWeight: '600',
              marginHorizontal: SIZES.base,
              marginLeft: SIZES.small
          }}>{post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes</Text>
          <Caption post={post} />
          <CommentSection post={post} />
      </View>
  )
}

const PostHeader = ({post}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: SIZES.base,
            alignItems: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                    <Image source={{ uri: post.profile_pic }} style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        marginLeft: 6,
                        borderWidth: 1.5,
                        borderColor: COLORS.primary,
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        color: COLORS.white,
                        marginLeft: 6,
                        fontWeight: '600',
                    }}>{post.user}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={20} color={COLORS.white} style={{marginRight: 5}} />
            </TouchableOpacity>
        </View>
    )
}

const PostImage = ({post}) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image source={{ uri: post.imageUrl }} style={{
            height: '100%',
            resizeMode: 'cover',
        }} />
    </View>
)
 /*
    <AntDesign name="heart" size={24} color="black" />
*/

const PostFooter = ({post}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: SIZES.base - 2,
        }}>
            <View style={{flexDirection:'row', marginTop: SIZES.base}}>
                <TouchableOpacity style={styles.icons}>
                    <AntDesign name="hearto" size={SIZES.icon} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <FontAwesome5 name="comment" size={SIZES.icon} color={COLORS.white}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <Ionicons name="paper-plane-outline" size={SIZES.icon} color={COLORS.white}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: SIZES.base}}>
                <TouchableOpacity style={styles.icons}>
                    <FontAwesome name="bookmark-o" size={SIZES.icon} color={COLORS.white}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Caption = ({post}) => (
    <View style={{
        marginHorizontal: SIZES.small - 1,
        marginTop: 2,
    }}>
        <Text style={{
            color: COLORS.white
        }}>
            <Text style={{
                fontWeight: '600',
            }}>{post.user}</Text>
            <Text>  {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({post}) => (
    <View style={{marginTop: 2, marginHorizontal: SIZES.small - 1}}>
        {!!post.comments.length && (
            <Text style={{color: COLORS.gray}}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)

const styles = StyleSheet.create({
    icons: {
        margin: 5
    }
})

export default Post;