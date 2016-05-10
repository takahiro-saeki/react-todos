import React from 'react';

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

class CardUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "test1",
          content: "sample1",
          id: this.createId(8)
        },
        {
          title: "test2",
          content: "sample2",
          id: this.createId(8)
        },
        {
          title: "test3",
          content: "sample3",
          id: this.createId(8)
        },
        {
          title: "test4",
          content: "sample4",
          id: this.createId(8)
        }
      ]
    }
  }

  createId(n) {
    let CODE = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    let r = "";
    for (let i = 0, k = CODE.length; i < n; i++) {
        r += CODE.charAt(Math.floor(k * Math.random()));
    }
    return r;
  }

  render() {
    let arr = [];
    for (let i = 0; i < this.state.data.length; i++) {
      arr.push(<li key={i} style={card.ui}>{this.state.data[i].title}</li>)
    }

    return (
      <ul style={card.wrap}>{arr}</ul>
    )
  }
}

export default CardUi;
