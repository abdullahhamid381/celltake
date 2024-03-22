import React, { useState } from 'react';
import './scss/SearchMobile.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const SearchMobile = () => {

  // MODEL ============
  const [model, setModel] = useState('');

  const handleChangemodel = (event) => {
    setModel(event.target.value);
  };

  // CITY=========
  const [city, setCity] = useState('');

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  // RANGE=========

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
// MIN RANGE============
  const [minrange, setMinrange] = useState('');

  const handleChangeminrange = (event) => {
    setMinrange(event.target.value);
  };

  // MAX RANGE============
  const [maxrange, setMaxrange] = useState('');

  const handleChangemaxrange = (event) => {
    setMaxrange(event.target.value);
  };
  return (
    <div className="postion-select">
      <div className="select-parent">
        <div className="select-width">



          <div className="grid">

            {/* MODEL=============== */}

            <Box style={{ width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Enter brand or model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={model}
                  label="Age"
                  onChange={handleChangemodel}
                >
                  <MenuItem value={10}>Vivo</MenuItem>
                  <MenuItem value={20}>Apple</MenuItem>
                  <MenuItem value={30}>Samsung</MenuItem>
                </Select>
              </FormControl>
            </Box>


{/* CITY============ */}


            <Box style={{ width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select city</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="Age"
                  onChange={handleChangeCity}
                >
                  <MenuItem value={10}>Bhakkar</MenuItem>
                  <MenuItem value={20}>Karachi</MenuItem>
                  <MenuItem value={30}>Lahore</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* PRICE RANGE */}
            <Box style={{ width: '100%' }} >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <div className="range-min-max" style={{ display: 'flex', width: '95%', gap: '10px', margin: 'auto' }}>
                    <Box style={{ width: '100%' }} >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={minrange}
                          label="Age"
                          onChange={handleChangeminrange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box style={{ width: '100%' }} >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={maxrange}
                          label="Age"
                          onChange={handleChangemaxrange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </Select>
              </FormControl>
            </Box>
            <div className="search">
              <input type="button" value={"Search Mobile"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
