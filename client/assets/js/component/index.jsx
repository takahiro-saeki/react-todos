import React from 'react';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';
import CardUi from './cardUi.jsx';

class Index extends React.Component {
  render() {
    return (
      <section>
      <Header />
      <Main />
      <CardUi />
      <Footer />
      </section>
    )
  }
}

export default Index;
