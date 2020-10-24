import React from 'react';
/* CSS */
import './style.scss';

interface CardProps {
  text: string
}

const Card = ({ text }: CardProps) => {
  return (
    <div className="card">
      <div className="card__container">{text}</div>
    </div>
  );
}

export default Card;