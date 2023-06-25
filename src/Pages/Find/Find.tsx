import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';

const Find: React.FC = () => {
  const [search, setSearch] = useSearchParams();

  const [isLoading, setLoading] = useState(false);
  const [hospital, setHospital] = useState();

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
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !hospital && <div>Hospital not found</div>}
      {!isLoading && hospital && <div>{JSON.stringify(hospital)}</div>}
    </div>
  );
};

export default Find;
