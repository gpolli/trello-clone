import React, { useState } from 'react';
/* CSS */
import './style.scss';

interface NewItemFormProps {
  onAdd(text: string): void,
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  return (
    <div className="new-item__form">
      <input type="text" className="new-item__input" value={text} onChange={e => setText(e.target.value)} />
      <button className="new-item__button" type="button" onClick={() => onAdd(text)}>Create</button>
    </div>
  );
}

export default NewItemForm;
