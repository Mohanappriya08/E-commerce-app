import { formatMoney } from "../../utils/money";
import dayjs from 'dayjs';

export function DeliveryOptions({deliveryOptions,item}) {
    return (
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
    );
}