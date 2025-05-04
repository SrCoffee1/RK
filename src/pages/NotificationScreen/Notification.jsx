// NotificationScreen.jsx
import React from 'react';
import NotificationCard from './NotificationCard';
import './Notification.css';
import { useTheme } from '../../contexts/ThemeContext'; // Importando o contexto de tema

export default function NotificationScreen() {
  const { isDarkTheme } = useTheme(); // Usando o hook de tema

  const notifications = [
    {
      type: 'risk',
      title: 'Alerta de risco',
      time: '09:52',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio'
    },
    {
      type: 'safe',
      title: 'Seguro',
      time: '08:30',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio'
    },
    {
      type: 'safe',
      title: 'Seguro',
      time: '01:30',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio'
    },
    {
      type: 'risk',
      title: 'Alerta de risco',
      time: '00:02',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio'
    },
    {
      type: 'safe',
      title: 'Seguro',
      time: '23:47',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio'
    },
  ];

  return (
    <div className={`notification-screen ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <NotificationCard 
            key={index}
            type={notification.type}
            title={notification.title}
            time={notification.time}
            content={notification.content}
            isDarkTheme={isDarkTheme} // Passando a prop de tema
          />
        ))}

        {/* Empty placeholder cards at the bottom like in the image */}
        <div className={`placeholder-card ${isDarkTheme ? 'dark' : 'light'}`} />
        <div className={`placeholder-card placeholder-card-faded ${isDarkTheme ? 'dark' : 'light'}`} />
      </div>
    </div>
  );
}