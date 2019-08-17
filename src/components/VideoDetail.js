import React from 'react';

const VideoDetail = ({ video }) => {
  const componentWillMount = () => {
    document.body.style.backgroundColor = '#66ceff';
  };

  const componentWillUnmount = () => {
    document.body.style.backgroundColor = null;
  };

  if (!video) {
    componentWillMount();

    return (
      <div
        style={{ color: 'white', textAlign: 'center', marginRight: '20rem' }}
      >
        <h1>No results found</h1>
        <p>Try different keywords or remove search filters</p>
      </div>
    );
  }

  componentWillUnmount();

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
