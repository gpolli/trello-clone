import React from 'react';
/* CSS */
import './style.scss';

interface ColumnProps {
  text?: string
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <section className="column">
      <div className="column__container">
        <div className="column__title">{text}</div>
        {children}
      </div>
    </section>
  );
}

export default Column;