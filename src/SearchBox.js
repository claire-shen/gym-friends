import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa2' >
            <input 
            className = 'pa3 ba br4 bw2 b--pink bg-lightest-blue'
            type ='search' 
            placeholder = 'Find Friends' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox; 