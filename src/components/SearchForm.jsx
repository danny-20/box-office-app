import { useEffect, useState } from 'react';
import { useSearchStr } from '../lib/UseSearchStr';

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
      <lable>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        />
      </lable>
      <lable>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </lable>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
