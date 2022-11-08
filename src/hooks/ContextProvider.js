import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	//To solve sibar's appearance
	const [activeMenu, setActiveMenu] = useState(true);

	//To solve icon navbar click
	const [isClicked, setIsClicked] = useState(initialState);

	//To solve screen size
	const [screenSize, setScreenSize] = useState(undefined);

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
