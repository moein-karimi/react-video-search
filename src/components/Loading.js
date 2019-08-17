import React from 'react';
import gif from '../img/catgif.gif';

const Loading = props => {
  document.body.style.backgroundColor = '#66ceff';
  return (
    <div
      style={{
        display: `${props.displayLoader}`,
        position: 'absolute',
        top: '50%',
        left: '40%'
      }}
    >
      <img src={gif} alt="Loading..." />
    </div>
  );
};

export default Loading;
