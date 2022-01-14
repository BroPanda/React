import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.services";
import {urls} from "../../config/urls";

const UserComments = ({userIdPosts}) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        userService.getUserPostsById(urls.users, userIdPosts)
            .then(posts => setComments(posts))
    }, [userIdPosts])

    return (
        <div >
            {comments && comments.map(post =>
                <div key={post.id}>
                    <h4>User ID {post.userId}</h4>
                    <h3>{post.id} {post.title}</h3>
                    <p>{post.body}</p>
                </div>

            )}
        </div>
    );
};

export default UserComments;