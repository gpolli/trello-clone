import React, { useState } from 'react';
/* Utils */
import { useFocus } from '../../../../utils/useFocus';
/* CSS */
import './style.scss';

interface NewItemFormProps {
  onAdd(text: string): void,
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <div className="new-item__form">
      <input type="text" className="new-item__input" ref={inputRef} value={text} onChange={e => setText(e.target.value)} />
      <button className="new-item__button" type="button" onClick={() => onAdd(text)}>Create</button>
    </div>
  );
}

export default NewItemForm;
