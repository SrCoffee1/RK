import React, { useState } from 'react';
import './Sidebar.css';
import * as Icons from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ to, icon, text, isExpanded, isActive }) => (
  <Link
    to={to}
    className={`sidebar-item ${isActive ? 'active' : ''}`}
    title={!isExpanded ? text : undefined}
  >
    {icon}
    {isExpanded && <span className="item-text">{text}</span>}
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleTheme = (e) => {
    e.stopPropagation();
    setIsDarkTheme(!isDarkTheme);
  };

  const routeTop = [
    { to: '/monitoramento', text: 'Câmeras', icon: <Icons.Camera size={20} /> },
    { to: '/contatos', text: 'Contatos', icon: <Icons.Phone size={20} /> },
    { to: '/notifications', text: 'Notificações', icon: <Icons.Bell size={20} /> },
    { to: '/perfil', text: 'Perfil', icon: <Icons.UserCircle size={20} /> },
    { to: '/faq', text: 'FAQ', icon: <Icons.HelpCircle size={20} /> },
  ];

  const routeBottom = [
    { to: '/config', text: 'Configurações', icon: <Icons.Settings size={20} /> },
    { to: '/login', text: 'Logout', icon: <Icons.LogOut size={20} /> },
  ];

  return (
    <div className={`sidebar ${isDarkTheme ? 'dark' : 'light'} ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-top">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="toggle-icon-container">
            <div className="toggle-icon"><Icons.ChevronRight size={20} /></div>
            {isExpanded && (
              <div className="theme-icon" onClick={toggleTheme}>
                {isDarkTheme ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sidebar-middle">
        {routeTop.map(({ to, text, icon }) => (
          <SidebarItem
            key={to}
            to={to}
            text={text}
            icon={icon}
            isExpanded={isExpanded}
            isActive={location.pathname === to}
          />
        ))}
      </div>

      <div className="sidebar-bottom">
        {routeBottom.map(({ to, text, icon }) => (
          <SidebarItem
            key={to}
            to={to}
            text={text}
            icon={icon}
            isExpanded={isExpanded}
            isActive={location.pathname === to}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
