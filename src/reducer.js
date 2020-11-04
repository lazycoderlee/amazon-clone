export const initialState = {
	// in the basket if u put names ["lee", "sha"], the basket shows the 2 number bcz we are insterted two names
	basket: [],
	user: null,
};

//selector
export const getBasketTotal = (basket) =>
	// 4:33:00 reference
	basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
	//see the console which product is pulled when click the Add To Basket button
	console.log(action);
	//the action will listen what you dispatch in the component
	switch (action.type) {
		case "ADD_To_BASKET":
			//Login for Adding item to basket
			return {
				//returning the current state
				...state,
				//here in the updating to the basket that is ...state.basket(current data of the basket) data and also the dispactched item data
				basket: [...state.basket, action.item],
			};

		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

		case "REMOVE_FROM_BASKET":
			//we cloned the Basket
			let newBasket = [...state.basket];

			const index = state.basket.findIndex(
				//  I Have an a dout Props.id or id
				(basketItem) => basketItem.id === action.id
			);

			if (index >= 0) {
				//item exists in basket, remove it...
				//splicing is cut the index of newBasket with 1
				newBasket.splice(index, 1);
			} else {
				//warn is a red console log
				console.warn(
					`Can't remove the product(id :${action.id}) as its not in basket!`
				);
			}

			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
}

export default reducer;

////We need to use this reducer to manage our application level state. To do so, let’s introduce everything in the index.js.
