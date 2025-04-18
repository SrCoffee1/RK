import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function NotificationItem({ notification }) {
  // Verifica se a prop existe
  if (!notification) {
    return (
      <div className="notification-item fallback">
        <div className="notification-item-header">
          <span className="notification-item-title">
            <AlertTriangle size={18} />
            <span>Notificação inválida</span>
          </span>
        </div>
        <p className="notification-message">
          Nenhuma informação foi fornecida.
        </p>
      </div>
    );
  }

  // Desestrutura os dados da notificação
  const { type, time, message } = notification;

  return (
    <div className={`notification-item ${type === 'risk' ? 'risk' : 'safe'}`}>
      <div className="notification-item-header">
        <div className="notification-item-title">
          {type === 'risk' ? (
            <>
              <AlertTriangle size={18} />
              <span>Alerta de risco</span>
            </>
          ) : (
            <>
              <CheckCircle size={18} className="icon-safe" />
              <span>Seguro</span>
            </>
          )}
        </div>
        <span className="notification-time">{time}</span>
      </div>
      <p className="notification-message">
        {message}
      </p>
    </div>
  );
}
