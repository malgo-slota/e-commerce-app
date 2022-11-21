import { createContext, useState } from 'react';

const SummaryContext = createContext(); 

export function SummaryProvider({ children }) {

     const [adress, setAdress] = useState({});
     const [payment, setPayment] = useState("");
     const [delivery, setDelivery] = useState("");

	return (
		<SummaryContext.Provider value={{ adress, setAdress, payment, setPayment, delivery, setDelivery }}>
			{children}
		</SummaryContext.Provider>
	);
}

export default SummaryContext;