import React from 'react';
const SearchBox = ({ searchfield, searchChange }) => {
	return(
		<div className='ba2'>
			<input
				className = 'pa3 ba b--green bg-lughtest-blue' 
				type='search' 
				placeholder='search robots'
				onChange= {searchChange}
			/>
		</div>
	);
}

export default SearchBox;