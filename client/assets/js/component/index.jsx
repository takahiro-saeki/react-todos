import React from 'react';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

class Index extends React.Component {
  render() {
    return (
      <section>
      <Header />
      <Main />
      <Footer />
      </section>
    )
  }
}

export default Index;
