import React from 'react';
/* Components */
import AddNewItem from '../AddNewItem';
/* CSS */
import './style.scss';

interface ColumnProps {
  text: string
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <section className="column">
      <div className="column__container">
        <div className="column__title">{text}</div>
        {children}
        <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
      </div>
    </section>
  );
}

export default Column;