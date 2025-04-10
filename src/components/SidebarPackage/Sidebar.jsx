import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import * as Icons from '../ICons/Icons';
import './Sidebar.css';

const Sidebar = ({ activePage, setActivePage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleTheme = (e) => {
    e.stopPropagation();
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`sidebar ${isDarkTheme ? 'dark' : 'light'} ${isExpanded ? 'expanded' : ''}`}>
      
      {/* Seção Topo: Botão de expandir/recolher e tema */}
      <div className="sidebar-top">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="toggle-icon-container">
            <div className="toggle-icon"><Icons.Chevron /></div>
            {isExpanded && (
              <div className="theme-icon" onClick={toggleTheme}>
                {isDarkTheme ? <Icons.Sun /> : <Icons.Moon />}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seção do Meio: Itens principais */}
      <div className="sidebar-middle">
        <SidebarItem icon={<Icons.Camera />} text="Câmeras" isActive={activePage === 'Câmeras'} isExpanded={isExpanded} onClick={() => setActivePage('Câmeras')} />
        <SidebarItem icon={<Icons.Phone />} text="Contatos" isActive={activePage === 'Contatos'} isExpanded={isExpanded} onClick={() => setActivePage('Contatos')} />
        <SidebarItem icon={<Icons.Profile />} text="Perfil" isActive={activePage === 'Perfil'} isExpanded={isExpanded} onClick={() => setActivePage('Perfil')} />
        <SidebarItem icon={<Icons.Help />} text="FAQ" isActive={activePage === 'FAQ'} isExpanded={isExpanded} onClick={() => setActivePage('FAQ')} />
      </div>

      {/* Seção Inferior: Somente Configurações */}
      <div className="sidebar-bottom">
        <SidebarItem icon={<Icons.Settings />} text="Configurações" isActive={activePage === 'Configurações'} isExpanded={isExpanded} onClick={() => setActivePage('Configurações')} />

        {!isDarkTheme && isExpanded && (
          <div className="bottom-text">
            Ativar o Windows<br />
            Acesse Configurações para ativar o Windows.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
