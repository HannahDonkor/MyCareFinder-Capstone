import React from 'react';
import './SearchBar.css'
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onNameSearch: (query: string) => void;
  onLocationSearch: (location: string) => void;

}

function SearchBar({ onNameSearch, onLocationSearch, handleSearch }: SearchBarProps & { handleSearch: () => void; }) {

  // const handleSearch = () => {
  //   onSearch(name, location);
  // }; 

  return (
    <div className="search-container">
      <div className="input-container">
        <input 
          type="text" 
          className="search-input name-input"
          placeholder="Hospital Name"
          
          onChange={(e) => onNameSearch(e.target.value)} 
        />
        <div className="input-divider" />
        <input 
          type="text" 
          className="search-input location-input"
          placeholder="Location"
         
          onChange={(e) => onLocationSearch(e.target.value)} 
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch size={20} />
        </button>
      </div>
    </div>
    // <div className='for-search'>
    //   <input
    //     className='search-bar'
    //     type="text"
    //     onChange={(e) => onNameSearch(e.target.value)}
    //     placeholder="Search hospitals by name..."
    //   />
    //   <input
    //   className="search-bar"
    //   type="text"
    //   onChange={(e) => onLocationSearch(e.target.value)}
    //   placeholder="location, town, city..."
    //   />
    //   <FaSearch className='icon'/>
    // </div>
  );
}

export default SearchBar;
