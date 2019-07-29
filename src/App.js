import React, {Component} from 'react';
import Table from './Table';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';

class App extends Component {
  render(){
    const user = {
      firstName: "<script>alert('hello')</script>",
      lastName: 'Perez'
    }
    const author = {
      name: 'peter',
      avatarUrl: '../public/favicon.ico'
    }
    return (
      <div className="App">
        <div className="Table">
          <Table />
        </div>
        <h1>hello {user.firstName}!</h1>
        <Welcome name={user.lastName} />
        <Comment author={author} text="comment lalala." date="2019-07-27"/>
        <Clock />
        <Toggle />
      </div>
    )
  }
}

export default App;