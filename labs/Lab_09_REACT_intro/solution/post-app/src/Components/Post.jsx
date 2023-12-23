import React, { useState } from 'react';

const Post = ({ post, remove }) => {
    const [like, setLike] = useState('defoult');


    const likeOnClick = () => {
        setLike('red');
    }

    return (
        <>
            <div className='Post' >
                <div className='post__text'>
                    <strong >{post.username}</strong>
                    <p>{post.text}</p>
                    <p>{post.tag}</p>
                </div>
                <div className="post__button">
                    <button style={{ backgroundColor: like }}
                        onClick={likeOnClick}
                    >like post</button>
                    <button onClick={()=>remove(post)}>удалить</button>
                </div>
            </div>
        </>
    );
};

export default Post;