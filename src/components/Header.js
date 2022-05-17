import { FiChevronLeft } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <FiChevronLeft />
      <span>2018</span>
      <input type="text" className="txtSearch" />
      <FaCog />
    </header>
  );
}

export default Header;
