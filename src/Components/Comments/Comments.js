import React, {useEffect, useState} from 'react';
import Comment from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(data => data.json())
            .then(comments => setComments(comments))
    })
    return (
        <div>
            {comments.map(v =>
                <Comment
                    postId={v.postId} id={v.id} name={v.name} email={v.email} body={v.body}

                />)}

        </div>
    );
};

export default Comments;