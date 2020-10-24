import React from 'react';
/* Context */
import { useAppState } from '../../context/AppStateContext';
/* Components */
import Card from '../Card';
import AddNewItem from '../AddNewItem';
/* CSS */
import './style.scss';

interface ColumnProps {
  text: string,
  index: number,
}

const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <section className="column">
      <div className="column__container">
        <div className="column__title">{text}</div>
        {state.lists[index].tasks.map(task => (
          <Card text={task.text} key={task.id} />
        ))}
        <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
      </div>
    </section>
  );
}

export default Column;