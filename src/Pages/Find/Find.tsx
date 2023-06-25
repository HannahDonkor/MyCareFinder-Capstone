import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Find.css'


const Find: React.FC = () => {
  const [search, setSearch] = useSearchParams();

  const [isLoading, setLoading] = useState(false);
  const [hospital, setHospital] = useState();
  const [results, setResults] = useState<any>();

  
  const handleSearch = () => {};

  useEffect(() => {
    console.log(search.get('id'));

    if (!search.get('id')) return;
    fetch(`https://carefinder-backend.vercel.app/api/hospitals/${search.get('id')}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setHospital(res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [search]);

  return (
    <div className='find-content'>
      <SearchBar/>
      <div>
      {!results?.type && (
          <div>
            <h2 className='download'>
              All hospitals available{' '}
              <a
                target="_blank"
                href="https://carefinder-backend.vercel.app/api/hospitals?output=csv">
                Download
              </a>
            </h2>
          </div>
        )}
      </div>
      <div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && !hospital && <div>Hospital not found</div>}
        {!isLoading && hospital && <div>{JSON.stringify(hospital)}</div>}
      </div>
    </div>
  );
};

export default Find;
