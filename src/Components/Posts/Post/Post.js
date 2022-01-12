import React from 'react';

const Post = (props) => {
    let {userId, id, title, body} = props;
    return (
        <div>
            {id} {userId} {title} {body}
            <hr/>

        </div>
    );
};

export default Post;