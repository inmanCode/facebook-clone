import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

const Feed = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    db.collection('posts')
      .orderBy('timesstamp', 'desc')
      .onSnapshot((snapshot) =>
        SetPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timesstamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
};

export default Feed;
