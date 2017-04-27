import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

      	<header>
              <div className="burger-container">
                  <i className="fa fa-bars fa-lg"></i>
              </div>
              <h1>Picture That!</h1>
      	</header>

    	<main>

        <div className="container col1">
			<div className="story-preview inside-cont">
                <div className="story-thumbnail-container">
                    <a href="story.html"><img className="story-thumbnail" src={require('./images/story.jpg')} alt="Thumbnail" width="100%" /></a>
                </div>
                <h2 className="story-preview-title">How my colony got wiped out</h2>
                <p className="story-preview">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className="story-preview-date">
                    <i className="fa fa-user" aria-hidden="true"></i> Johnny | <i className="fa fa-clock-o" aria-hidden="true"></i> 2 hours ago | 3 comments
                </div>
			</div>
        </div>

        <div className="container col1">
			<div className="story-preview inside-cont">
                <div className="story-thumbnail">
                    <a href="story.html"><img src={require('./images/story2.jpg')} alt="Thumbnail" width="100%" /></a>
                </div>
                <h2 className="story-preview-title">The perfect base</h2>
                <p className="story-preview">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero eos et accusam et justo duo dolores et ea rebum.</p>
                <div className="story-preview-info">
                    <i className="fa fa-user" aria-hidden="true"></i> Nick | <i className="fa fa-clock-o" aria-hidden="true"></i> 3 days ago | 1 comment
                </div>
			</div>
        </div>

    	</main>

      </div>
    );
  }
}

export default App;
