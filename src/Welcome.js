import React, {Component} from 'react';

// function Welcome(props) {
//   return (<h1>hello, {props.name}</h1>);
// }

class Welcome extends Component {
  render () {
    return (<h1>hello, {this.props.name}</h1>);
  }
}

export default Welcome;