import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import './Blog.css';
import Posts from '../Posts/Posts'
import UploadImg from '../../components/UploadImg/UploadImg';
import Trivia from '../TriviaApi/Trivia'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
    return import('../../components/UploadImg/UploadImg');
})

class Blog extends Component {

    state= {
        auth: false
    }
   // <Error />  
    render () {
        console.log(this.props)
        return (
            <div>  
              
    
         <Switch>
         <Route path="/new-post" exact  component={AsyncNewPost} />
         <Route path="/" exact component={Posts} />
         <Route path="/trivia" exact component={Trivia} />
         <Route  exact render={() => <h1>Not Found</h1>} />
         </Switch>
          
       
       </div>
        );
    }
}

export default Blog;