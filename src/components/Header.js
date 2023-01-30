import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'green' : 'black'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS
// const headingStyle = {
//   color: 'orange',
//   backgroundColor: '#000',
//   fontSize: '3rem',
//   margin: 0,
// };

export default Header;
