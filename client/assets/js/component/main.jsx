import React from 'react';
import request from 'superagent';
import CardUi from './cardUi.jsx';
const URL = 'posts';

const formStyle = {
  form: {
    width: '100%',
    margin: '10px auto'
  },
  input: {
    appearance: 'none',
    WebkitAppearance: 'none',
    fontSize: '20px',
    border: '1px solid #ccc'
  },
  submit: {
    appearance: 'none',
    WebkitAppearance: 'none',
    fontSize: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc'
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    request
    .get(URL)
    .end((err, res) => {
      if (res.ok) {
        console.log(res.body)
      } else {
        this.setState({data: res.body})
        console.log(this.state);
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.submit} style={formStyle.form}>
      <div>
      <input type="text" placeholder="Your name" style={formStyle.input} />
      <input type="submit" value="送信" style={formStyle.submit} />
      </div>
      <CardUi data={this.state.data}/>
      </form>
    )
  }
}

export default Main;
