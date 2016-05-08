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
    this.loop();
  }
  render() {
    return (
      <ul>
      <li>{this.state.data[2].title}</li>
      </ul>
    )
  }
  loop() {
    for (let i = 0; i < this.state.data.length; i++) {
      console.log(i);
    }
  }
}

export default CardUi;
