import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ icon, text, isActive, isExpanded, onClick }) => {
  return (
    <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="icon">{icon}</div>
      {isExpanded && <div className="item-text">{text}</div>}
    </div>
  );
};

export default SidebarItem;
