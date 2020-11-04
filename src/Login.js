import { auth } from "./firebase";
import React, { useState } from "react";

import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
	// The useHistory() is a hook from react-router-dom which helps you to redirect user from the actual code.
	//useHistory Hook listen to Login and Logout
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(props);
	
	const signIn = (e) => {
		e.preventDefault(); //this will stop the refresh!!!
		//do the login logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//loggged in, redirect to homepage...
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault(); //this will stop the refresh!!!
		//do the register logic
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//created a user and logged in, redirecct to homepage
				// it successfully created a new user with email and password
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>

				{/* We use e.preventDefault() to prevent the page from reloading because of the form tag. */}
				<form>
					<h5>E-mail</h5>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON's CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
