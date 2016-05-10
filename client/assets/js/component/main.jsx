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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li style={card.ui} data={this.props.data}></li>
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
        console.log(res.body)
      } else {
        console.log(res.body.data);
        this.setState({data: res.body.data})
      }
    });
  }
  render() {
    var testData = this.state.data.map((comment, i) => {
      console.log(this.state.data[i].title)
      return(
        <CardUi key={i} data={this.state.data[i].title}>{this.state.data[i].title}</CardUi>
      )
    })
    /*
    for (let i = 0; i < this.state.data.length; i++) {
      return(
        <CardUi key={i} data={this.state.data[i].title}/>
      )
    }
    */
    return (
      <form onSubmit={this.submit} style={formStyle.form}>
      <div>
      <input type="text" placeholder="Your name" style={formStyle.input} />
      <input type="submit" value="送信" style={formStyle.submit} />
      </div>
      <ul style={card.wrap}>{testData}</ul>
      </form>
    )
  }
}

export default Main;
