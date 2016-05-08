import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import headerStyle from '../style/header';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50
  }
});

class Header extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar title="React todos" titleStyle={headerStyle.title}/>
      </MuiThemeProvider>
    )
  }
}

export default Header;
