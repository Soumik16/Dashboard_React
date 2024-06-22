import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <aside className={`sidebar ${theme}`}>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
