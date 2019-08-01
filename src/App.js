import React, {Component} from 'react';
import Table from './Table';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import Calculator from './Calculator';
import FilterableProductTable from './FilterableProductTable';

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
    const PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
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
        <Calculator />
        <FilterableProductTable products={PRODUCTS} />
      </div>
    )
  }
}

export default App;