
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export function OrderSummary({ deliveryOptions, cart}) {
    return (
        <>
            <div className="order-summary">
                {deliveryOptions.length > 0 && cart.map((item, index) => {
                    const selectedDeliveryOption = deliveryOptions.find((option) => { return option.id === item.deliveryOptionId });
                    return (
                        <div key={item.productId} className="cart-item-container">
                            <div className="delivery-date">
                                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={item.product.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {item.product.name}
                                    </div>
                                    <div className="product-price">
                                        {formatMoney(item.product.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">{item.quantity}</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">
                                            Update
                                        </span>
                                        <span className="delete-quantity-link link-primary">
                                            Delete
                                        </span>
                                    </div>
                                </div>

                                <div className="delivery-options">
                                    <div className="delivery-options-title">
                                        Choose a delivery option:
                                    </div>
                                    {deliveryOptions.map((option, index) => {
                                        let priceString = 'FREE Shipping';
                                        if (option.priceCents > 0) {
                                            priceString = `${formatMoney(option.priceCents)} - Shipping`;
                                        }
                                        return (
                                            <div className="delivery-option" key={option.id}>
                                                <input type="radio" defaultChecked={option.id === item.deliveryOptionId}
                                                    className="delivery-option-input"
                                                    name={`delivery-option-${item.productId}`} />
                                                <div>
                                                    <div className="delivery-option-date">
                                                        {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                    </div>
                                                    <div className="delivery-option-price">
                                                        {priceString}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>)
                })
                }


            </div>
        </>
    )
}