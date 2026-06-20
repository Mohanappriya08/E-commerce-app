import './checkout-header.css';
import './CheckoutPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { formatMoney } from '../../utils/money';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        axios.get(`api/delivery-options?expand=estimatedDeliveryTime`).then((response) => {
            setDeliveryOptions(response.data);
            console.log(response.data);
        });

        axios.get(`api/payment-summary`).then((response) => {
            setPaymentSummary(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div>
            <title>Checkout</title>
            <CheckoutHeader cart={cart} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>
                    <paymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </div >
    );
}
