import React, { Component } from 'react';

import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {  
        quantity: 1
    }

    render() {         
        return ( 
            <div className="quantity-picker">
                <button onClick={this.increase} className="btn btn-sm btn-primary">+</button>
                { this.state.quantity }
                <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>
            </div>
         );
    }

    increase = () => {                
        let qnty = this.state.quantity + 1;
        if(qnty < 21) {
            this.setState({ quantity: qnty });
            this.props.onChange(qnty);
        }
    };

    decrease = () => {        
        let qnty = this.state.quantity - 1;
        if(qnty > 0) {
            this.setState({ quantity: qnty });        
            this.props.onChange(qnty);
        }
    }
}
 
export default QuantityPicker;