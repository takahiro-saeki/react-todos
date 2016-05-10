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
    }
  }

  render() {
    let arr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      arr.push(<li key={i} style={card.ui}>{this.props.data[i].title}</li>)
    }

    return (
      <ul style={card.wrap}>{arr}</ul>
    )
  }
}

export default CardUi;
