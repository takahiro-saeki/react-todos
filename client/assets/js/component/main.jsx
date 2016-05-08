import React from 'react';
import CardUi from './cardUi.jsx';
import request from 'superagent';
const URL = 'reactPost';

class Main extends React.Component {
  submit(e) {
    e.preventDefault();
    request
    .get(URL)
    .end(function(err, res) {
      if (res.ok) {
        res.body.forEach(item => console.log(item.title));
      } else {
        console.log('error');
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.submit}>
      <input type="text" placeholder="Your name" />
      <input type="submit" value="送信" />
      </form>
    )
  }
}

export default Main;
