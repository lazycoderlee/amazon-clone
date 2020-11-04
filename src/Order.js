import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order(props) {
	return (
		<div className="order">
			<h2>Order Placed</h2>
			<p>
				{moment
					.unix(props.order.data.created)
					.format("MMMM DD YYYY, h:mma")}
			</p>
			<p className="order__id">
				<small>{props.order.id}</small>
			</p>

			{props.order.data.basket?.map((item) => (
				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}

			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={props.order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Order;
