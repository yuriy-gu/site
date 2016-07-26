import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from './modules/youtube_search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCbidTxNRgnT4PyO_QYiOm5FRySEKOQG0w';



class Youtube extends Component {
  constructor() {
    super();
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch('dogs');
  }
  
  videoSearch(req) {
    YTSearch(req, API_KEY).then(data => {
      console.log(data);
      this.setState({videos: data.items, selectedVideo: data.items[0]});
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar search={req => this.videoSearch(req)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect = {video => this.setState({selectedVideo: video})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<Youtube />, document.querySelector('.container'));