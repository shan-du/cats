import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
