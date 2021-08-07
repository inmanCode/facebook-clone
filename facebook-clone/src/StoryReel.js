import React from 'react';
import './StoryReel.css';
import Story from './Story';
const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://picsum.photos/200/305'
        profileSrc='https://picsum.photos/200/400'
        title='Aymane'
      />
      <Story
        image='https://picsum.photos/200/304'
        profileSrc='https://picsum.photos/200/410'
        title='Alessia'
      />
      <Story
        image='https://picsum.photos/200/303'
        profileSrc='https://picsum.photos/200/420'
        title='Brad'
      />
      <Story
        image='https://picsum.photos/200/301'
        profileSrc='https://picsum.photos/200/430'
        title='React San'
      />
      <Story
        image='https://picsum.photos/200/302'
        profileSrc='https://picsum.photos/200/440'
        title='jhon'
      />
    </div>
  );
};

export default StoryReel;
