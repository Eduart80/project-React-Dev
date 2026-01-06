import { useState, useEffect } from 'react';
import moonLight from '/images/moonLight.png'
import moonDark from '/images/moonDark.png'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light-mode';
  });

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light-mode' ? 'dark-mode' : 'light-mode'))
  };

  return (
    <header>
      <nav aria-label="Main navigation">
        <h1>Where in the world?</h1>
        <button id="theme-toggle" aria-label="Toggle dark and light mode" onClick={toggleTheme}>
          <img
            src={theme === 'dark-mode' ? moonLight : moonDark}
            alt={theme === 'dark-mode' ? 'moonLight' : 'moonDark'}
            id="moon"
          />
          <span id="mode">{theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </nav>
    </header>
  );
}
