import React, {useEffect, useState} from 'react';

import {userService} from "../../../services/user.services";
import {urls} from "../../../config/urls";
import style from './userPosts.module.css'

const UserPosts = ({userIdPosts}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        userService.getUserPostsById(urls.users, userIdPosts)
            .then(posts => setPosts(posts))
    }, [userIdPosts])

    console.log(`${style.p10}`);
    return (
        <div className={`${style.p10}`}>
            {posts && posts.map(post =>
                <div key={post.id}>
                    <h4>User ID {post.userId}</h4>
                    <h3>{post.id} {post.title}</h3>
                    <p>{post.body}</p>
                </div>

            )}
        </div>
    );
};

export default UserPosts;