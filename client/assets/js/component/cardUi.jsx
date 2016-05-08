import React from 'react';

class CardUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "test1"
        },
        {
          title: "test2"
        },
        {
          title: "test3"
        }
      ]
    }
  }
  render() {
    let arr = [];
    for (let i = 0; i < this.state.data.length; i++) {
      arr.push(<li key={i}>{this.state.data[i].title}</li>)
    }
    console.log(arr)

    return (
      <ul>{arr}</ul>
    )
  }
}

export default CardUi;
