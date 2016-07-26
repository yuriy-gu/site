import React from 'react';

const VideoListItem = (props) => {
  let imageUrl = props.video.snippet.thumbnails.default.url;
  let title = props.video.snippet.title;
  function selectVideo() {
    props.onVideoSelect(props.video);
  }
  
  return (
    <li onClick={selectVideo} className={(props.i%2 === 0)? 'list-group-item gray-bg' : 'list-group-item'}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;