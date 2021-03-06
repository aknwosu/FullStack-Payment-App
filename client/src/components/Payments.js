import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import * as actions from '../actions/index'


class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name= 'Emaily'
                description='credits'
                amount={500} 
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={token => this.props.handleToken(token)}
            >
                <button className='btn'>Add Credits</button>
            </StripeCheckout>
        );
    }
}
export default connect (null, actions)(Payments);