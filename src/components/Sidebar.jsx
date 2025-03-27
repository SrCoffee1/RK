import React, { useState } from 'react';
import { Camera, Phone, User, HelpCircle, Settings, ChevronRight, ChevronLeft, Home } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const NavItem = ({ icon, text, active, onClick }) => (
    <div 
      className={`nav-item ${isExpanded ? 'expanded' : 'collapsed'} ${active ? 'active' : 'hover'}`}
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      {isExpanded && <span className="text">{text}</span>}
    </div>
  );

  const sidebarTheme = isDarkMode 
    ? 'dark-mode' 
    : 'light-mode';

  return (
    <div className={`sidebar ${sidebarTheme} ${isExpanded ? 'expanded-width' : 'collapsed-width'}`}>
      <div 
        className="toggle-sidebar"
        onClick={toggleSidebar}
      >
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </div>

      <div className="nav-items">
        <NavItem 
          icon={<Home />} 
          text="Home" 
          active={activeItem === 'Home'}
          onClick={() => setActiveItem('Home')}
        />
        <NavItem 
          icon={<Camera />} 
          text="Câmeras" 
          active={activeItem === 'Cameras'}
          onClick={() => setActiveItem('Cameras')}
        />
        <NavItem 
          icon={<Phone />} 
          text="Contatos" 
          active={activeItem === 'Contacts'}
          onClick={() => setActiveItem('Contacts')}
        />
        <NavItem 
          icon={<User />} 
          text="Perfil" 
          active={activeItem === 'Profile'}
          onClick={() => setActiveItem('Profile')}
        />
        <NavItem 
          icon={<HelpCircle />} 
          text="FAQ" 
          active={activeItem === 'FAQ'}
          onClick={() => setActiveItem('FAQ')}
        />
      </div>

      <div className="settings">
        <NavItem 
          icon={<Settings />} 
          text="Configurações" 
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
