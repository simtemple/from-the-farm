import React, { Component } from 'react';
import { Buy } from '../Buy/Buy';
import { Header } from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route } from 'react-router';
import Profile from '../Profile/Profile';
import * as cleaner from '../../helpers/cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vendors: [],
      products: [],
      user: {}
    }
  }

  async componentDidMount(){
    const response = await fetch('https://xpoll-be.herokuapp.com/api/v1/vendors')
    const results = await response.json()
    const vendors = cleaner.cleanVendors(results.data)
    const products = cleaner.cleanProducts(results.data)
    this.setState({
      vendors,
      products,
      user: vendors[5]
    })
  }

  render() {
    const products = this.state.products.filter((product) => {
      return product.user_id === this.state.user.id;
    });

    console.log(products)

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/buy" render={() => <Buy appState={this.state} />}/>
          <Route path="/profile" render={() => <Profile user={this.state.user} products={products} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
