import { Component } from 'react';
import ReactPlayer from 'react-player';
import { Container } from './App.styled';
import { VideoList } from 'components/VideoList/VideoList';
import videos from 'data/videos.json';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Container>
        <h1>Selected Video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        {selectedVideo && <ReactPlayer url={selectedVideo} controls />}
      </Container>
    );
  }
}

export default App;
