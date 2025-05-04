// NotificationCard.jsx
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import './Notification.css';

export default function NotificationCard({ type, title, time, content, isDarkTheme }) {
  return (
    <div className={`notification-card ${type === 'risk' ? 'risk' : 'safe'} ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="icon-container">
        {type === 'risk' ? (
          <AlertTriangle size={20} className="icon" />
        ) : (
          <CheckCircle size={20} className={`icon check-icon ${isDarkTheme ? 'dark' : 'light'}`} />
        )}
      </div>
      
      <div className="notification-content">
        <div className="notification-header">
          <h3 className="notification-title">{title}</h3>
          <span className="notification-time">{time}</span>
        </div>
        <p className="notification-text">
          {content}
        </p>
      </div>
    </div>
  );
}