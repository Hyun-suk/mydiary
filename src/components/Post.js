import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


// <Divider />
// {content &&
//   content
//     .split('\n')
//     .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
// const { title, date, content } = this.props.post;
// <time dateTime={date}>{moment(date).fromNow()}</time>
// <Divider />
// <Paper zDepth={0} style={paperStyle}>
// </Paper>

class Post extends Component {

  _renderPost = () => {
    return (
      <article>
        <h1>타이틀</h1>

        <br />
        <br />

        <p> 콘텐츠는 여기에 들어갑니다 </p>
      </article>
    );
  };

  render() {
    return (
      <div>
        <div>
          {this._renderPost()}
        </div>

        <footer>Copyright 2018 Acme Corp.</footer>
      </div>
    );
  }
}

export default Post;
