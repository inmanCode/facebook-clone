import React from 'react';
import './SliderBarRow.css';
import { Avatar } from '@material-ui/core';
const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className='SideBarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
