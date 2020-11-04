import React from "react";
import "./Home.css";
import Product from "./Product";
import { products, bannerImg } from "./products";

function Home() {
	return (
		<div className="home">
			<img className="home__image" src={bannerImg} alt="" />
			{/*product id, title, price, rating, image */}
			<div className="home__row">
				{products.map((item, index) => {
					return (
						<Product
							key={index}
							id={item.id}
							title={item.title}
							price={item.price}
							rating={item.rating}
							image={item.image}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
