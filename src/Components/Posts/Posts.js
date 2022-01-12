import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(data => data.json())
            .then(posts => setPosts(posts))
    })
    return (
        <div>
            {posts.map(v =>
                <Post userId={v.userId} id={v.id} title={v.title} body={v.body}

                />)}

        </div>
    );
};

export default Posts;