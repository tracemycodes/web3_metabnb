import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);

	const setClick = () => {
		setShowModal(!showModal);
	};

	return (
		<AppContext.Provider
			value={{
				showModal,
				setClick,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
