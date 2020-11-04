import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
	//useStataVakue have an state and disptach, here the state er declared basket and user in the reducer.js
	const [{ basket, user }, dispatch] = useStateValue();

	console.log(basket);

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header ">
			<Link to="/">
				<img
					className="header__logo "
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
				/>
			</Link>

			{/* Search Box */}
			<div className="header__search ">
				<input className="header__searchInput  " type="text" />
				<SearchIcon className="header__searchIcon " />
			</div>
			{/* 3 Links */}
			<div className="header__nav ">
				<Link className="header__link" to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link className="header__link" to="/orders">
					<div className="header__option ">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<Link className="header__link" to="/">
					<div className="header__option ">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>

				<Link className="header__link" to="/checkout">
					<div className="header__optionBasket ">
						<ShoppingBasketIcon />
						<span className="header__optionTwo header__basketCount">
							{/* optional changing with ?  */}
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
