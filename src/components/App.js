import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Error from './Error';
import Loading from './Loading';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    disload: 'none',
    error: false
  };

  componentDidMount() {
    this.onTermSubmit('blackhole');
  }

  onTermSubmit = async term => {
    try {
      this.setState({ disload: 'block' });
      // add this.setState({ videos: [] }) for remove item as loading
      if (this.state.videos !== []) this.setState({ videos: [] });
      const response = await youtube.get('/search', {
        params: {
          q: term
        }
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        disload: 'none'
      });
    } catch (err) {
      this.setState({ error: true });
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  renderContent() {
    if (this.state.error === true) {
      return <Error />;
    }

    // add this.state.disload === 'block'
    if (this.state.disload === 'block' || this.state.selectedVideo === null) {
      return <Loading displayLoader={this.state.disload} />;
    }

    return (
      <VideoDetail error={this.state.error} video={this.state.selectedVideo} />
    );
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">{this.renderContent()}</div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
