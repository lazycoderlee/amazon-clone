import React, { createContext, useContext, useReducer } from "react";

//setup data layer
//we need this to track the basket
//Prepares the datalayer
export const StateContext = createContext();

//wrap our app and provide the Data layer
//https://alligator.io/react/usereducer/ ---UseReducer Hook Link
//const [state, dispatch] = useReducer(reducer, initialState); --- Syntax

//Buil d a Provider
export const StateProvider = ({ reducer, intialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, intialState)}>
		{children}
	</StateContext.Provider>
);

//pull information form the data layer

//const {state, dispatch} = useContext(StoreContext); Using useContext Syntax
export const useStateValue = () => useContext(StateContext);
