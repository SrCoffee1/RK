import { useState } from 'react';
import { Bell, X, ChevronLeft } from 'lucide-react';
import NotificationItem from './NotificationItem';
import './NotificationSidebar.css';

export default function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    {
      id: 1,
      type: "risk",
      time: "09:52",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      id: 2,
      type: "safe",
      time: "08:30",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      id: 3,
      type: "safe",
      time: "01:30",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      id: 4,
      type: "risk",
      time: "00:02",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      id: 5,
      type: "safe",
      time: "23:47",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    }
  ];

  return (
    <div className="notification-container">
      {/* Botão de notificações */}
      <button 
        onClick={toggleSidebar}
        className="notification-button"
      >
        <Bell size={24} />
        <span className="notification-badge">
          {notifications.length}
        </span>
      </button>

      {/* Sidebar de notificações */}
      <div className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Cabeçalho da Sidebar */}
        <div className="notification-header">
          <div className="header-title">
            <ChevronLeft size={20} />
            <h2>Notificações</h2>
          </div>
          <button onClick={toggleSidebar} className="close-button">
            <X size={20} />
          </button>
        </div>

        {/* Lista de notificações */}
        <div className="notification-list">
          {notifications.map((notification) => (
            <NotificationItem 
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
}