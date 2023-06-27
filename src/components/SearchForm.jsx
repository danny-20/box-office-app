import { useEffect, useState } from 'react';
import { useSearchStr } from '../lib/UseSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  useEffect(() => {
    console.log('componetn mounts');
  }, []);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
     
     <CustomRadio
     label="Shows"
      name="search-option"
      value="shows"
      onChange={onRadioChange}
      checked={searchOption === 'shows'}
     />
       <CustomRadio
     label="Actors"
      name="search-option"
      value="actors"
      onChange={onRadioChange}
      checked={searchOption === 'actors'}
     />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
