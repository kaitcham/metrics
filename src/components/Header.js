import { FiChevronLeft } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { VscClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './Header.module.scss';
import Filter from './Filter';

function Header() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const claerSearchText = () => {
    handleSearch('');
  };

  return (
    <header className={style.header}>
      <FiChevronLeft onClick={() => navigate(-1)} />
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={searchText}
          className="txtSearch"
          placeholder="Search ... "
          onChange={(e) => handleSearch(e.target.value)}
        />
        <VscClose onClick={claerSearchText} />
        {searchText !== '' ? <Filter searchText={searchText} claerSearchText={claerSearchText} /> : ''}
      </div>
      <IoHomeOutline onClick={() => navigate('/')} />
    </header>
  );
}

export default Header;
