import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', variant = 'desktop' }) {
  const { theme, toggleTheme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'mobile') {
    return (
      <div className={`theme-toggle-mobile ${className}`}>
        <div className="theme-toggle-mobile__header">
          <span className="theme-toggle-mobile__label">Theme Mode</span>
          <span className="theme-toggle-mobile__current">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
        <div className="theme-toggle-mobile__pills">
          <button
            type="button"
            className={`theme-mobile-pill ${isDark ? 'is-active' : ''}`}
            onClick={() => setTheme('dark')}
            aria-pressed={isDark}
          >
            <FiMoon aria-hidden /> Dark
          </button>
          <button
            type="button"
            className={`theme-mobile-pill ${!isDark ? 'is-active' : ''}`}
            onClick={() => setTheme('light')}
            aria-pressed={!isDark}
          >
            <FiSun aria-hidden /> Light
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-btn__track">
        <span className={`theme-toggle-btn__option ${!isDark ? 'is-active' : ''}`}>
          <FiSun aria-hidden />
        </span>
        <span className={`theme-toggle-btn__option ${isDark ? 'is-active' : ''}`}>
          <FiMoon aria-hidden />
        </span>
        <motion.div
          className="theme-toggle-btn__thumb"
          animate={{ x: isDark ? 30 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        >
          {isDark ? (
            <FiMoon className="theme-thumb-icon" aria-hidden />
          ) : (
            <FiSun className="theme-thumb-icon" aria-hidden />
          )}
        </motion.div>
      </div>
    </button>
  );
}
