// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../pages/PageStyles.css';

// const Navbar = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <nav className={`navbar ${theme}`}
//       <div className="logo">
//         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//           DeepFine HQ
//         </Link>
//       </div>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/submit">Submissions</Link>
//         <Link to="/contact">Contact</Link>
//         <button className="theme-toggle-btn" onClick={toggleTheme}>
//           {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/PageStyles.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // const toggleMenu = () => {
  //   setMenuOpen((prev) => !prev);
  // };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          DeepFine HQ
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/submit" onClick={() => setMenuOpen(false)}>Submissions</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
