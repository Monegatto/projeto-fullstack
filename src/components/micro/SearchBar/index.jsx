import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(inputValue);
    }
  };

  const handleIconClick = () => {
    handleSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Paste a song URL to see more details"
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        color="#1E1E1E"
        className="find-icon"
        onClick={handleIconClick}
      />
    </div>
  );
}

export default SearchBar;
