import React, { useState } from 'react'
import './scss/SearchMobile.scss'

// MATERIAL UI==========

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
const SearchMobile = () => {
    const [selectedOptions, setSelectedOptions] = useState(['', '', '']); // Initialize with three empty values

    const handleChange = (event, index) => {
        const newOptions = [...selectedOptions];
        newOptions[index] = event.target.value;
        setSelectedOptions(newOptions);
    };

    const options = [
        ['Apple', 'Samsung', 'Vivo'],
        ['Bhakkar', 'Multan', 'Lahore'],
        ['10000', '20000', '30000'],
    ];
    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching mobiles...');
      };

    return (
   <div className="postion-select">
       <div className="select-parent">
        <div className="select-width">
        <Box className='grid'>
      {[0, 1, 2].map((index) => (
        <FormControl key={index} fullWidth>
          {index === 0 && <InputLabel id={`demo-simple-select-label-${index}`}>Enter brand or modelt</InputLabel>}
          {index === 1 && <InputLabel id={`demo-simple-select-label-${index}`}>Select city</InputLabel>}
          {index === 2 && <InputLabel id={`demo-simple-select-label-${index}`}>Price range</InputLabel>}
          <Select
            labelId={`demo-simple-select-label-${index}`}
            id={`demo-simple-select-${index}`}
            value={selectedOptions[index]}
            label={`Option ${index + 1}`}
            onChange={(event) => handleChange(event, index)}
            sx={{
              '& .MuiSelect-icon': {
                color: 'black', // Change the color here
              },
            }}
          >
            <MenuItem value="">{`Select ${index + 1}`}</MenuItem>
            {options[index].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
      <Button variant="contained" onClick={handleSearch} className='search'>Search Mobiles</Button>
    </Box>
        </div>
      </div>
   </div>
    )
}

export default SearchMobile