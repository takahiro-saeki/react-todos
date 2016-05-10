import React from 'react';
import request from 'superagent';
const URL = 'posts';

const card = {
  ui: {
    width: '21%',
    margin: '10px 2%',
    listStyle: 'none',
    display: 'inline-block'
  },
  wrap: {
    margin: '0px',
    textAlign: 'center',
    padding: '0px'
  }
}

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

class CardUi extends React.Component {
  render() {
    return (
      <li style={card.ui}>{this.props.title}</li>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "test1",
          content: "sample1"
        },
        {
          title: "test2",
          content: "sample2"
        },
        {
          title: "test3",
          content: "sample3"
        },
        {
          title: "test4",
          content: "sample4"
        }
      ]
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    request
    .get(URL)
    .end((err, res) => {
      if (res.ok) {
        this.setState({data: res.body.data})
      } else {
        console.log('error');
      }
    });
  }
  render() {
    const cardData = this.state.data.map((card,i) => {
      return <CardUi key={i} title={card.title} />
    })

    return (
      <form onSubmit={this.submit} style={formStyle.form}>
      <div>
      <input type="text" placeholder="Your name" style={formStyle.input} />
      <input type="submit" value="送信" style={formStyle.submit} />
      </div>
      <ul style={card.wrap}>{cardData}</ul>
      </form>
    )
  }
}

export default Main;
