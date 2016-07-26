import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  let all_videos = props.videos.map((vid, i) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} video={vid} key={vid.etag} i={i} />;
  });
  return (
    <ul className="list-group col-md-4">
      {all_videos}
    </ul>
  );
}

export default VideoList;