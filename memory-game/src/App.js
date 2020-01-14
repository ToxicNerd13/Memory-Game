import React from 'react';
import './App.css';
import Score from './components/Score/Score';
import Image from './components/Image/Image'
import images from './images.json';

class App extends React.Component {
  state = {
    images,
    clickedImages = [],
    score: 0,
    message: ""
  };

  // Method to handle image clicks
  imageClick = (id) => {
    // Create new array with rearranged images
    const shuffledImages = this.shuffleImages(images);
    this.setState({images: shuffledImages});

    // If the image has been clicked, reset the game
    if (this.state.clickedImages.includes(id)) {
      this.setState({
        score: 0,
        clickedImages: [],
        message: "Oops! You already clicked that one! Try again."
      });
    }
    // If the image hasn't been clicked, add it to clicked array & increment the score
    else if (this.state.score < 11) {
      this.setState({
        clickedImages: this.state.clickedImages.concat(id),
        score: this.state.score + 1,
        message: "Good work! Keep going!"
      })
    }
    else {
      // Once all correct images have been clicked, declare a win and reset the game
      this.setState({
        clickedImages: [],
        score: 0,
        message: "Congrats, you win!"
      })
    }
};

shuffleImages = (images) => {

}

  render() {
    return (
      <div>
        <div className="jumbotron text-center mb-5">
          <h1>Memory Game</h1>
          <h5>Click the pictures as they randomly rearrange! Don't click on any picture twice or you lose!</h5>
          <Score />
        </div>

        <div className="container">
          <div className="row text-center">
            {this.state.images.map(image => (
              <div className="col-sm-3 mb-4">
                <Image
                  id={image.id}
                  key={image.id}
                  name={image.name}
                  url={image.url}
                  imageClick={this.imageClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
