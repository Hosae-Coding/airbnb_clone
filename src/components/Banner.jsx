import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './banner.css';
import Search from './Search';

const Banner = () => {
   const [showSearch, setShowSearch] = useState(false);
   const history = useHistory();

   return (
      <div className="banner">
         <div className="banner__search">
            {showSearch && <Search />}
            <Button
               onClick={() => setShowSearch(!showSearch)}
               variant="outline"
               className="banner__searchButton"
            >
               {showSearch ? 'Hide' : 'Search Dates'}
            </Button>
         </div>
         <div className="banner__info">
            <h1>Let's go Somewhere !</h1>
            <h5>
               Plan a different kind of getaway to uncover the hidden gems near
               you
            </h5>

            <Button onClick={() => history.push('./search')}>EXPLORE </Button>
         </div>
      </div>
   );
};

export default Banner;
