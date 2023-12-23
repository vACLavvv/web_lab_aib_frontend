import React from 'react';
import Post from './Post';
import PostTags from './PostTags';

const PostList = ({ posts, title, remove, sort, show, orPosts }) => {

    const uniqTags = (posts) => {
        const tags = posts.map(post => post.tag)
        const uniqTag = tags.filter((value, index, self) =>
            self.indexOf(value) === index
        );
        return uniqTag;
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
                Тэги:
            </p>
            {uniqTags(posts).map((tag,index) =>
                <PostTags sort={sort} tag={tag} key={posts[index].key} />
            )}
            <button onClick={()=>show(orPosts)}>Показать все</button>
            {posts.map(post =>
                <Post remove={remove} post={post} key={post.id} />
            )}
        </>
    );
};

export default PostList;