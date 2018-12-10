import React, { Component } from 'react';
import  {BrowserRouter, Route} from 'react-router-dom'
import Blog from './containers/Blog/Blog';
import Posts from './containers/Posts/Posts'
import NewPost from './containers/NewPost/NewPost'
import Trivia from './containers/TriviaApi/Trivia';
import Love from './containers/Love/Love';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
 
        <Love />
      </div>
    );
  }
}

export default App;
