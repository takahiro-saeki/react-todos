import React from 'react';

function date() {
  new Date().getFullYear();
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {year: 2016}
  }
  render() {
    return (
      <footer>Copyright © <time>{this.state.year}</time> hiro. All Rights Reserved.</footer>
    )
  }
}

export default Footer;
