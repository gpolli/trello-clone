import React, { useRef } from 'react';
/* Context */
import { useAppState } from '../../context/AppStateContext';
/* Components */
import Card from '../Card';
import AddNewItem from '../AddNewItem';
/* Utils */
import { useItemDrag } from '../../utils/useItemDrag';
/* CSS */
import './style.scss';

interface ColumnProps {
  text: string,
  index: number,
  id: string,
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", text, index, id });

  drag(ref)

  return (
    <div className="column" ref={ref}>
      <div className="column__container">
        <div className="column__title">{text}</div>
        {state.lists[index].tasks.map(task => (
          <Card text={task.text} key={task.id} />
        ))}
        <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch({ type: "ADD_TASK", payload: { text, listId: id } })} dark />
      </div>
    </div>
  );
}

export default Column;