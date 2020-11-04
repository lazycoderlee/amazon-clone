import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
	const [{ basket, user }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		//remove the item from the basket ....

		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: props.id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={props.image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{props.title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{props.price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(props.rating)
						.fill()
						.map((_) => (
							// eslint-disable-next-line jsx-a11y/accessible-emoji
							<p>🌟</p>
						))}
				</div>
				{!props.hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
