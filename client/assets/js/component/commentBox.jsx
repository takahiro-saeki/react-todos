import React from 'react';
import CommentList from './commentForm.jsx';
import CommentForm from './commentList.jsx';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: '',
        author: '',
        text: ''
      }]
    }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  static defaultProps = {
    data: [{
      id: '',
      author: '',
      text: ''
    }]
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => this.setState({data: data}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => { this.setState({data: data}); },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: data => this.setState({data: data}),
      error: (xhr, status, err) => {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }
    });
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
