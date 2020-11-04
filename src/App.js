import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

// The Key from the Stripe (Private Key)
const promise = loadStripe(
	"pk_test_51HcOZQKc7JIOV2HiGhmYYvG2EPR8FryTPJZg0Mi707xYC0MEamcOVcec7p5l53vKY2QcfK3AFbhC7ktaaLRgDy9D00r3Mk1ho1"
);

function App() {
	const [{ user }, dispatch] = useStateValue();

	// useEffect <<<<<<<<< POWERFUL  ----if u use a return in your useEffect then the result of that will run when the componenent is unmounted
	//Piece of code which runs based on a given conditions
	//am creting listner which will listen all the if the user signed in or signed out
	useEffect(() => {
		// will only run once when the app component loads...
		const unSubscribe = auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>>", authUser);

			if (authUser) {
				// the user was logged in...
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//the user is logged out...
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			//Reference 40:40 Part-2
			//Any cleanup operations go in here....
			unSubscribe();
		};
	}, []);

	console.log("USER is >>>>>>", user);
	return (
		//BEM Convention
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						{/* The Elements provider */}
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
