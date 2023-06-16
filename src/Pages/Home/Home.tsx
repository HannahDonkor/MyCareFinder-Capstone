import React, {useState} from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Home.css';

const Home = () => {
  const [locationQuery, setLocationQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');


  const onLocationSearch = (location: string) => {
    setLocationQuery(location);
    console.log(`Searching hospitals in location: ${location}`);
    // Here you would call a function to actually perform the search based on location
  };

  const onNameSearch = (name: string) => {
    setNameQuery(name);
    console.log(`Searching hospitals by name: ${name}`);
    // Here you would call a function to actually perform the search based on condition
  };

  const handleSearch = () => {
    onLocationSearch(locationQuery);
    onNameSearch(nameQuery);
};


 
  
  return (
    <div className='for-home'>
      
        <h1 className='home-head'><span className='highlight'>Find the hospital</span> you want</h1><h2 className='home-c'>easily and quickly at just a click</h2>
        
        <p className='home-p'>The easiest and fastest to get your desired hospital online</p>
          <SearchBar onLocationSearch={onLocationSearch} onNameSearch={onNameSearch} handleSearch={handleSearch}/>
      
    </div>
  )
}

export default Home