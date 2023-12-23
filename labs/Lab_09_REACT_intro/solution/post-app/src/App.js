import React, { useState } from "react";
import PostList from "./Components/PostList";
import "./style.css";
import PostAdd from "./Components/PostAdd";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'user1', text: 'text1', tag: '#1' },
    { id: 2, username: 'user2', text: 'text1', tag: '#2' },
    { id: 3, username: 'user3', text: 'text1', tag: '#1' },
    { id: 4, username: 'user4', text: 'text1', tag: '#1' },
    { id: 5, username: 'user5', text: 'text1', tag: '#3' },
    { id: 6, username: 'user6', text: 'text1', tag: '#4' }
  ]);

  const [orPosts, setOrPosts] = useState([...posts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setOrPosts([...orPosts, newPost]);
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
    setOrPosts(orPosts.filter(p => p.id !== post.id));
  }

  const sortedByTags = tag => {
    setPosts(posts.filter(p => p.tag === tag));
  }

  const showAll = posts => {
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <PostAdd create={createPost} />
      {posts.length !== 0
        ? <PostList orPosts={orPosts} show={showAll} sort={sortedByTags} remove={removePost} posts={posts} title='Список постов' />
        : <>Посты не найдены</>
      }
    </div>
  );
}

export default App;