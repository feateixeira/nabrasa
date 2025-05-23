import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/nabrasa" className="flex items-center gap-2">
          <img src="https://images.unsplash.com/vector-1743260302108-6d3365326995?q=80&w=2256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=100" width="100px" alt="logo na brasa"/>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Na Brasa©</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hambúrgueres Artesanais</p>
            </div>
            </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}