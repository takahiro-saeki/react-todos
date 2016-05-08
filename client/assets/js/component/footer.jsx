import React from 'react';
import moment from 'moment';
import footerStyle from '../style/footer';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {year: moment().format('YYYY')}
  }
  render() {
    return (
      <footer style={footerStyle.bg}>Copyright © <time>{this.state.year}</time> hiro. All Rights Reserved.</footer>
    )
  }
}

export default Footer;
