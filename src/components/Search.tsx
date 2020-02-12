import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { isValidABN } from "../helpers";

interface Props {
  setQuery: (query: string) => void;
}

export const Search = ({ setQuery }: Props) => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const searchByABN = isValidABN(value);

  const handleClick = () => {
    if (searchByABN) {
      history.push(`/company/${value}`);
    } else {
      setQuery(value);
    }
  };

  return (
    <div className="flex my-8">
      <input
        data-testid="search-input"
        className="block w-full px-4 py-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Company name or corresponding ABN"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        data-testid="search-button"
        className="h-10 px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};
