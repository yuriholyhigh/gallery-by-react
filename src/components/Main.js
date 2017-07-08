require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name: 'react photo gallery!'};
    alert(JSON.stringify(this.state));
    alert(JSON.stringify(this.props));
  }
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>hello, {this.state.name}</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  title: 'app title'
};

export default AppComponent;
