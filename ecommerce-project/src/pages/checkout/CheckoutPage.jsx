import './checkout-header.css';
import './CheckoutPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import {PaymentSummary} from './PaymentSummary';
import { formatMoney } from '../../utils/money';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        const getCheckoutData = async () => {
        let response = await axios.get(`api/delivery-options?expand=estimatedDeliveryTime`)
            setDeliveryOptions(response.data);
            console.log(response.data);
        }
        getCheckoutData();
        const getPaymentSummary = async () => {
            let response = await axios.get(`api/payment-summary`);
            setPaymentSummary(response.data);
            console.log(response.data);
        }
        getPaymentSummary();
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
