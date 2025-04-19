import React from 'react';
import NotificationCard from './NotificationCard';
import './Notification.css';

export default function NotificationScreen() {
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
    <div className="notification-screen">
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <NotificationCard 
            key={index}
            type={notification.type}
            title={notification.title}
            time={notification.time}
            content={notification.content}
          />
        ))}

        {/* Empty placeholder cards at the bottom like in the image */}
        <div className="placeholder-card" />
        <div className="placeholder-card placeholder-card-faded" />
      </div>
    </div>
  );
}
