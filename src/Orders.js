import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Orders.css";

import Order from "./Order";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState();

	useEffect(() => {
		//clear explanation 3:03 Challenge(Day 4)

		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				//onSnapshot will give realtime snapshot with the database
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>

			<dic className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</dic>
		</div>
	);
}

export default Orders;
