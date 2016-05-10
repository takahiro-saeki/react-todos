import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import request from 'superagent';


class Comment extends React.Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="comment">
      <h2 className="commentAuthor">
      {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  loadCommentsFromServer() {
    request
    .get(this.props.url)
    .end((err, data) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({data: data.body})
      }
    })
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    request
    .post(this.props.url)
    .send(comment)
    .end((err, data) => {
      if(err) {
        this.setState({data: comments});
        console.log('Post error')
      } else {
        this.setState({data: data.body})
      }
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} key={comment.id}>
        {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
      {commentNodes}
      </div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder="Your name"
      value={this.state.author}
      onChange={this.handleAuthorChange}
      />
      <input
      type="text"
      placeholder="Say something..."
      value={this.state.text}
      onChange={this.handleTextChange}
      />
      <input type="submit" value="Post" />
      </form>
    );
  }
}
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('app')
);
