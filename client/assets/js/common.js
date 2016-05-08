import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <section>
      テスト
      </section>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
