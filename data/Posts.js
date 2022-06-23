import {USERS} from "./Users";

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60',
        user: USERS[0].user,
        likes: 730,
        caption: 'Oh My Glitter! :p I could not express my joy after seeing this wonderful moment',
        profile_pic: USERS[0].image,
        comments : [
            {
                user: USERS[1].user,
                comment: 'Indeed oh ur glitter XD'
            },
            {
                user: USERS[2].user,
                comment: '🔥'
            }
        ]
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1636921453736-a97f85c2c8b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvc3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        user: USERS[1].user,
        likes: 73000,
        caption: 'Found a bird on my pole :D',
        profile_pic: USERS[1].image,
        comments : [

        ]
    }
]
