import React from 'react';
import Summary from './Summary';
import Total from './Total';

class Cart extends React.Component {
    render(){
        return (
            <div>
            <Summary 
          selected = {this.props.selected}
          USCurrencyFormat = {this.props.USCurrencyFormat}
          total = {this.props.total}
          />

          <Total 
          selected = {this.props.selected}
          />
          </div>
        )
    }
    
}

export default Cart;