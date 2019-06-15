import React, { Component } from 'react';
import logo from './logo.svg';
import socketService from './utilities/socket'
import './App.css';
import TableRow from './components/Row'

const Row = React.memo(TableRow)

class App extends Component {
  state = { stocksPrice: [] }

  componentDidMount() {

    socketService(this.handleUpdateMessage)
  }

  handleUpdateMessage = (data) => {
    let stocksPrice = this.state.stocksPrice.slice(0);

    data.forEach(([name, price], index) => {
      const indOfStock = stocksPrice.findIndex(s => s.name === name);
      const newStock = { name, price, date: Date.now(), color: "" }
      // find price increase or decrease
      if (indOfStock > -1) {
        const oldStock = stocksPrice.splice(indOfStock, 1);
        newStock.color = (newStock.price - oldStock[0].price) > 0 ? "green" : "red";

      }

      if (stocksPrice.length + 1 > 10) {
        stocksPrice.shift(newStock)
      } else {
        stocksPrice.unshift(newStock);
      }
    });
    this.setState({ stocksPrice })
  }

  render() {
    const { stocksPrice } = this.state;
    return (
      <table className="stock-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Price</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {
            stocksPrice.map((stock, inx) => (
              <Row {...stock} key={inx} />
            ))
          }

        </tbody>
      </table>
    );
  }
}

export default App;
