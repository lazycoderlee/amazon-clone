import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
	const history = useHistory();
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="subtotal col-s-1">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift ">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button
				onClick={(e) => {
					user ? history.push("/payment") : history.push("/login");
				}}
			>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
