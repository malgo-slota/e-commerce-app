import { createContext, useState } from 'react';

const SearchContext = createContext(); 

export function SearchProvider({ children }) {

    const [searchInput, setSearchInput] = useState("");
    const [isSearchBarOpen, setSearchBarOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarOpen(!isSearchBarOpen);
    }

	return (
		<SearchContext.Provider value={{ searchInput, setSearchInput, isSearchBarOpen, setSearchBarOpen, toggleSearchBar }}>
			{children}
		</SearchContext.Provider>
	);
}

export default SearchContext;