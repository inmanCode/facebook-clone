import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imgUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      db.collection('posts').add({
        message: input,
        timesstamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imgUrl,
      });
    } else {
      alert('write something first :)');
    }
    setImageUrl('');
    setInput('');
  };
  return (
    <div className='MessageSender'>
      <div className='MessageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder={`What's on you mind,${user.displayName}?`}
            className='MessageSender__input'
          />
          <input
            value={imgUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type='text'
            placeholder='Image URL(optional)'
          />
          <button onClick={handleSubmit} type='submit'></button>
        </form>
      </div>
      <div className='MessageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'yellow' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
