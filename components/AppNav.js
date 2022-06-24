import {Image, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Divider} from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import {COLORS, SIZES} from "../constants";

//<Ionicons name="home-outline" size={24} color="black" /> #home
//<Ionicons name="search-outline" size={24} color="black" /> #search
//<Ionicons name="add-circle-outline" size={24} color="black" /> #add-circle

export const navIcons = [
    {
        name: 'Home',
        active: 'home',
        inactive: 'home-outline',
    },
    {
        name: 'Search',
        active: 'search',
        inactive: 'search-outline',
    },
    {
        name: 'Add',
        active: 'add-circle',
        inactive: 'add-circle-outline',
    }
]

const AppNav = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Ionicons name={activeTab === icon.name ? icon.active : icon.inactive} size={SIZES.icon} color={COLORS.white} />
        </TouchableOpacity>
    )

    return (
        <View style={{
        }}>
            <Divider width={1} orientation='vertical' />
            <View style={{
                flexDirection: 'row',
                marginVertical: SIZES.small,
                justifyContent: 'space-around',
            }}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
                <TouchableOpacity onPress={() => setActiveTab('Profile')}>
                    <Image source={{uri: 'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60'}} style={{
                        width: SIZES.icon,
                        height: SIZES.icon,
                        borderRadius: SIZES.icon / 2,
                        borderWidth: activeTab === 'Profile' ? 2 : 0,
                        borderColor: COLORS.primary,
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppNav;