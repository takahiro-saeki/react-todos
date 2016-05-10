import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/index.jsx';
import request from 'superagent';

class User extends React.Component {
  render() {
    return (
      <div>{this.props.id}:{this.props.name}</div>
    );
  }
}
/*
User.propTypes = {
  name: React.PropTypes.string.isRequired,
  id:   React.PropTypes.number.isRequired
}
*/
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1, name: "foo"
        },
        {
          id: 2, name: "hate"
        }
      ]
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    request
    .get('users')
    .end((err, res) => {
      console.log(res.body.users)
      this.setState({users: res.body.users});
    })
  }

  render() {
    const users = this.state.users.map((user) => {
      return <User id={user.id} name={user.name} key={user.id}/>
    });
    return (
      <div>
        <p>ユーザー一覧</p>
        {users}
      </div>
    );
  }
}

ReactDOM.render(
  <Users />,
  document.getElementById('app')
)
