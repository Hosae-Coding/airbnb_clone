import React, { useState } from 'react';
import './search.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

const Search = () => {
   const [startData, setStartDate] = useState(new Date());
   const [endData, setEndtDate] = useState(new Date());

   const selectionRange = {
      startData: startData,
      endData: endData,
      key: 'selection',
   };

   const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startData);
      setEndtDate(ranges.selection.endData);
   };

   return (
      <div className="search">
         <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
         <h2>
            Number of Guests <PeopleIcon />
         </h2>
         <input min={0} defaultValue={2} type="number" />
         <Button>Search Airbnb</Button>
      </div>
   );
};

export default Search;
