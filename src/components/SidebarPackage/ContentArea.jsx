import React from 'react';
import './ContentArea.css';

const ContentArea = ({ activePage }) => {
  return (
    <div className="content">
      <div id="pageContent">Página de {activePage}</div>
    </div>
  );
};

export default ContentArea;
